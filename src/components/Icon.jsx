import React from 'react';

function Icon(props) {
  const weatherIconUrl = `https://openweathermap.org/img/w/${props.icon}.png`;
  const icon = <i><img src={weatherIconUrl} alt="weather icon"/></i>;
  return props.icon?icon:null; // return null while waiting for the icon
}
export default Icon;