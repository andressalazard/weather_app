import React from "react";
import IncomingWeather from "../IncomingWeather/IncomingWeather";
import styles from './WeatherForecast.module.css';

export default class WeatherForecast extends React.Component{

  render(){
    return(
    <div className={styles.container}>
      <IncomingWeather/>
      <IncomingWeather/>
      <IncomingWeather/>
      <IncomingWeather/>
      <IncomingWeather/>
    </div>
    )
  }

}
