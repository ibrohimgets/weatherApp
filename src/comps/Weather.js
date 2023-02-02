import React, { useEffect, useState } from "react";
import "./Weather.css";
import Footer from "./Footer";
import Service from "./Service";
const Weather = () => {
  const [city, setCity] = useState("Seoul");
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");

  ///////////////////////////////////////////////

  useEffect(() => {
    const fetchData = async () => {
      const data = await Service(city, unit);
      setWeather(data);
    };
    fetchData();
  }, [unit, city]);

  ///////////////////////////////////////////////

  const handleClick = (e) => {
    const button = e.currentTarget;
    const curVal = button.innerText.slice(1);
    const Celcius = curVal === "C";
    button.innerText = Celcius ? "°F" : "°C";
    setUnit(Celcius ? "metric" : "imperial");
  };

  ///////////////////////////////////////////////
  const handleChange = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };
  ///////////////////////////////////////////////
  const handleSearch = () => {
    setCity(input);
  };
  ///////////////////////////////////////////////
  const d = new Date();
  let day = d.getDay();
  let month = d.getMonth();
  let year = d.getFullYear();
  return (
    <div className="App">
      <div className="Main">
        {weather && (
          <div className="Cont">
            <div className="Date">
              Date : {month}. {day}. {year}
            </div>
            <div className="Section Section_inputs">
              <input
                placeholder="Enter a city..."
                type="text"
                name="city"
                onKeyDown={handleChange}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={handleSearch} className="btn">
                Search
              </button>
              <button onClick={handleClick} className="btn">
                °F
              </button>
            </div>
            <div className="Section Section_display">
              <div className="Icon">
                <h3 className="Name">
                  {weather.name}, {weather.country}
                </h3>
                <div className="Temp">
                  <h1>{`${weather.temp.toFixed()}°${
                    unit === "metric" ? "C" : "F"
                  }`}</h1>
                </div>
              </div>
              <img src={weather.iconURL} alt="Weather-icon" />

              <h3 className="Desc">{weather.description}</h3>
            </div>
            <Footer weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Weather;
