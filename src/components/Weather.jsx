import React from "react";
import _ from "../helpers";
import Icon from "./icon";
// ============================================
import "../sass/weather.scss";

/* Icons Class Names from Weather-icons  */
const icons = _.icons;

function Weather(props) {
  return (
    <div className="weather">
      <h2>{props.city} </h2>
      <div className="wc wc__status" >
        <Icon weatherCode={props.weatherCode} title={props.weatherDescription}/>
      </div>  
      <div  className="wc">
          <Icon className={icons.temperature} title="Temperature"/>
          <span className="wc__temp" >{props.temperature} &deg; C</span>
      </div>
      <div  className="wc">{_.showTime()}</div>
      <div className="wc weather__row">
        <span>
          <Icon className={icons.wind} title="Wind"/>
          <br/>{props.windSpeed} m/s
        </span>
        <span>
          <Icon className={icons.humidity} title="humidity" />
          <br/>{props.humidity} %
        </span>
        <span>
          <Icon className={icons.pressure} title="pressure" /> 
          <br/>{Number(props.pressure).toFixed(0)} hpa
        </span>
      </div>

    </div>
  );
}

export default Weather;