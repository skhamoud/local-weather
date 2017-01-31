import Axios from "axios";

let Api = {
  /*
  * Get Location then Weather Data
  */
  getLocalWeather() {
    const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
    return Axios.get("http://ip-api.com/json/?fields=16592").then((location) => {
      return Axios.get(weatherUrl, {
        params: {
          lat: location.data.lat,
          lon: location.data.lon,
          units: "metric",
          APPID: "55175e9a873159d3fa89b9c5629b4aea"
        }
      });
    }).then((response) => response).catch((err) => {
      console.log(err);
    });
  },
  /*
  *Search by City Name
  */
  searchWeather(cityName) {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}`;
    return Axios.get(weatherUrl, {
      params: {
        units: "metric",
        APPID: "55175e9a873159d3fa89b9c5629b4aea"
      }
    }).then((response) => response).catch((err) => {
      console.log(err);
    });
  }
};
export default Api;