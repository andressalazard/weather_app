import React from "react";
import { daysList, monthsList, weatherStateIcons, WEATHER_STATES_URL } from "../../../external-files/consults";
import styles from './IncomingWeather.module.css';



export default class IncomingWeather extends React.Component{
    
  render(){
    return(
    <div className={styles.container}>
      <div className={styles.weather_date}>
        {(this.props.data)
        && this.displayDate()}
      </div>
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

  displayDate(){
    let data = this.props.data;
    let dateData = data.date;
    if(dateData.includes('-')){
      let dateValues = dateData.split('-');
      dateValues = dateValues.map((value)=>{
        return parseInt(value)
      });
      let date = new Date(
        dateValues[0],
        dateValues[1]- 1,
        dateValues[2]);

      let dateFormat = {
        day: daysList[date.getDay()],
        date: date.getDate(),
        month: monthsList[date.getMonth()]
      }  
      
      return(
        <div className={styles.marked_date}>
         <h3>{dateFormat.day},</h3>
         <h3>{dateFormat.date}</h3>
         <h3>{dateFormat.month}</h3>
        </div>
      )
    }
    return (
      <h3 className={styles.tomorrow_header}>
        {dateData}
      </h3>
    );
  }
}