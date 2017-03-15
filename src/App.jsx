import React, { Component } from 'react';
import _ from './helpers';
//===========Styles==================
import "normalize.css";
import './app.scss';

//=============Components=======
import Api from './api';
import Weather from "./components/weather";
import SearchComponent from "./components/searchComponent";
import Icon from "./components/icon";


//=======CONTAINER================================


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {}
    };
    this.searchByCity = this.searchByCity.bind(this);
  }
  componentWillMount() {
    // Fires when the component is called for the first time just before component is Rendered
    this.getLocalWeather();
  }
  searchByCity(cityName) {
    Api.searchWeather(cityName).then((response) => {
      this.setState({
        weatherData: response.data,
      });
    });
  }
  getLocalWeather(){
    Api.getLocalWeather().then(response => {
      this.setState({
        weatherData: response.data
      });
    });
  }
  render() {
    const data = this.state.weatherData;
    return (
        <div className="App">
          {data.weather ? 
          <div>
            <Weather
              city={`${data.name}, ${data.sys.country.toUpperCase()}`}
              weatherCode={data.weather[0].id}
              weatherDescription={data.weather[0].description}
              temperature={data.main.temp}
              windSpeed={data.wind.speed}
              humidity={data.main.humidity}
              rain={data.rain ? data.rain : null}
              clouds={data.clouds.all}
              pressure={data.main.pressure} />
            <SearchComponent onSearch={this.searchByCity} />
          </div>
          : <div className="loading"><Icon className="wi-cloud-refresh" /></div>
          }
        </div>
    );
      
  }
}
export default App;