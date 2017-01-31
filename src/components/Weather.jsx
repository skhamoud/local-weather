import React from "react";
import _ from "../helpers";
import Icon from "./icon";
// ============================================
import "../sass/weather.scss";

/* Icons Class Names from Weather-icons  */
const icons = _.icons;

function Weather(props) {
  return (
    <div className="weather-container">
      <h2>{props.city} </h2>
      <div>
        <Icon weatherCode={props.weatherCode} title={props.weatherDescription}/>
      </div>  
      <div>
          <Icon className={icons.temperature} title="Temperature"/>
          {props.temperature} &deg;C
      </div>
      <span>{_.showTime()}</span>
      <div className="weather-row">
        <span>
          <Icon className={icons.wind} title="Wind"/>
          {props.windSpeed} m/s
        </span>
        <span>
          <Icon className={icons.humidity} title="humidity" />
          {props.humidity}%
        </span>
        <span>
          <Icon className={icons.pressure} title="pressure" /> 
          {Number(props.pressure).toFixed(0)} hpa
        </span>
      </div>

    </div>
  );
}

export default Weather;