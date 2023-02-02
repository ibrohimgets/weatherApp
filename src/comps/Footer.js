import React from "react";
import "./Footer.css";

const Footer = ({ weather, unit }) => {
  const tempUnits = unit === "metric" ? "°F" : "°C";
  const windUnits = unit === "metric" ? "m/s" : "m/h";
  const cards = [
    {
      id: 1,
      icon: <i class="fa-solid fa-arrow-down"></i>,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnits,
    },
    {
      id: 2,
      icon: <i class="fa-solid fa-arrow-up"></i>,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnits,
    },
    {
      id: 3,
      icon: <i class="fa-sharp fa-solid fa-face-smile"></i>,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnits,
    },
    {
      id: 4,
      icon: <i class="fa-solid fa-compress"></i>,
      title: "pressure",
      data: weather.pressure.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <i class="fa-solid fa-droplet-percent"></i>,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <i class="fa-solid fa-wind"></i>,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnits,
    },
  ];
  return (
    <div className="Section Section_footer">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="Card">
          <div className="Footer_card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};
export default Footer;
