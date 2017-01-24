import React from "react";
import Icon from "./Icon";
// ============================================
import "./css/Weather.css";

function Weather(props) {
  return (
    <div>
      <h2>City: {props.city} </h2>
      <p>Weather: {props.weather.main}</p>
      <p>Temperature : {Number(props.main.temp).toFixed(1)} &deg;C</p>
      <p>Weather Description:
        <Icon icon={props.weather.icon}/>
        {props.weather.description}
      </p>
    </div>
  );
}

export default Weather;