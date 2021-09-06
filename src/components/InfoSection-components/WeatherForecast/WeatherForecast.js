import React from "react";
import IncomingWeather from "../IncomingWeather/IncomingWeather";
import styles from './WeatherForecast.module.css';

export default class WeatherForecast extends React.Component{

  render(){
    return(
    <div className={styles.container}>
      {(this.props.forecastData)
      &&this.displayIncomingWeatherList()}
    </div>
    )
  }

  displayIncomingWeatherList(){
    let forecastData = this.props.forecastData;
    return forecastData.map((data, index) => {
      return <IncomingWeather data={data} 
        key={`weather_${index}`}
        tempUnits={this.props.tempUnits}/>
    });
  }
}
