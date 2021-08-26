import React from "react";
import { weatherStateIcons, WEATHER_STATES_URL } from "../../../external-files/consults";
import styles from './IncomingWeather.module.css';



export default class IncomingWeather extends React.Component{
    
  render(){
    return(
    <div className={styles.container}>
      <h3 className={styles.weather_date}>
        {(this.props.data)&&this.props.data.date}
      </h3>
      <div className={styles.icon_container}>
        {(this.props.data)&&this.displayStateIcon()}
      </div>
      {(this.props.data)&&this.displayTemperature()}
    </div>
    )
  }

  displayStateIcon(){
    let data = this.props.data;
    let weatherState = weatherStateIcons.find((icon)=>{
      return icon.key === data.weather_state_key;
    })
    let iconURL = WEATHER_STATES_URL + weatherState.icon_url;
    
    return(
      <img className={styles.weather_state}
        src={iconURL}
        alt={weatherState.description}/>)
  }

  displayTemperature(){
    let data = this.props.data;
    let temp = data.temp;
    return(
      <div className={styles.weather_temp}>
        <h5 className={styles.temp_value}>
          {Math.round(temp.max)}°C</h5>
        <h5 className={[styles.temp_value,
          styles.min_temp].join(' ')}>
          {Math.round(temp.min)}°C</h5>
      </div>
    )
  }
}