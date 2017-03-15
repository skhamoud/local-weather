import React from "react";
import _ from "../helpers";
import Icon from "./icon";
// ============================================

// Icons Class Names from Weather-icons 
const icons = _.icons;

class TempComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleTemp = this.handleTemp.bind(this);
		this.state = {unit : "C"};
	}
	handleTemp(){
		this.setState(prevState=>({unit: prevState.unit==="F"? "C": 'F'}));
	}

	render(){
		const newTemp = Math.floor(this.props.temperature);
		const unit = this.state.unit;
		const temp = unit==="C"?newTemp:(newTemp*1.8)+32;
		return (
			<div  className="wb wb__temp">
          <Icon className={icons.temperature} title="Temperature"/>
          <span className="wb__temp-number" >{Math.floor(temp)}</span>
					<button className="wb__temp-btn" onClick={this.handleTemp}>&deg;{unit}</button>
      </div>);
	}
}

function Weather (props){
		
  return (
    <div className="weather">
      <h2>{props.city} </h2>
      <div className="wb wb__status" >
        <Icon weatherCode={props.weatherCode} title='Weather Status'/> 
				<div>{props.weatherDescription}</div>
				
      </div>  
      <TempComponent temperature={props.temperature} />
      <div className="wb weather__row">
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