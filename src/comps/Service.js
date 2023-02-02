const API_KEY = "f189886d92a4970c02f5193bbb4e5b99";
const makeIcon = (iconId) =>
  `http://openweathermap.org/img/wn/${iconId}@2x.png`;

const Service = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  ///////////////////////////////////////////////

  ///////////////////////////////////////////////
  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL: makeIcon(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
  };
};
export default Service;
