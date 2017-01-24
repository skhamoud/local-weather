import React, { Component } from 'react';
import "normalize.css";
import './App.css';

//=============Components=======
import Api from './components/Api';
import Weather from "./components/Weather";
import Search from "./components/Search";

//=======CONTAINER================================

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      weather: [{}],
      main: {},
      wind: {},
      clouds: {}
    };
    this.searchByCity=this.searchByCity.bind(this);
  }
  componentWillMount() {
    // Fires when the component is called for the first time just before component is Rendered
    this.getLocalWeather();
  }

  render() {
    const data = this.state;
    return (
      <div>
        <Weather city={data.city} weather={data.weather[0]}
          wind={data.wind} main={data.main} clouds={data.clouds} />
        <Search onSearch={this.searchByCity}/>
      </div>
    );
  }
  searchByCity(cityName) {
    Api.searchWeather(cityName).then((response) => {
      const info = response.data;
      this.setState({
        city: `${info.name} ${info.sys.country.toUpperCase()}` ,
        weather: info.weather,
        main: info.main,
        wind: info.wind,
        clouds: info.clouds
      });
    });
  }
  getLocalWeather(){
    Api.getLocalWeather().then(response => {
      // const info = response.data;
      // localStorage.setItem('data', JSON.stringify(info));
      // take data from localstorage if offline for styling
      const info = JSON.parse(localStorage.getItem('data')) ;
      this.setState({
        city: `${info.name} ${info.sys.country.toUpperCase()}` ,
        weather: info.weather,
        main: info.main,
        wind: info.wind,
        clouds: info.clouds
      });
    });
  }
}
export default App;