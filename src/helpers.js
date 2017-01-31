const _ = (function helpers() {
  return {
    // classNames from weathericons
    icons: {
      temperature: "wi-thermometer",
      wind: "wi-strong-wind",
      humidity: "wi-humidity",
      pressure: "wi-barometer"
    },
    waitFor (prop, returnValue) {
      return prop ? returnValue : null;
    },
    showTime() {
      const date = new Date();
      return date.toLocaleTimeString();
    }
  };

})();
export default _;