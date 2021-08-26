import React from "react";
import styles from './IncomingWeather.module.css';

export default class IncomingWeather extends React.Component{
  render(){
    return(
    <div className={styles.container}>
      <h3 className={styles.weather_date}>
        Tomorrow
      </h3>
      <div className={styles.icon_container}>
        <img className={styles.weather_state}
          src={'/images/weatherStates/Hail.png'}
          alt={'clear-state'}/>
      </div>
      <div className={styles.weather_temp}>
        <h5 className={styles.temp_value}>16°C</h5>
        <h5 className={styles.temp_value}>11°C</h5>
      </div>
    </div>
    )
  }
}