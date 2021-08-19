import React from "react";
import styles from './WeatherSummary.module.css';
import showerWeather from '../../images/weatherTypes/Shower.png';
import backgroundCloud from '../../images/background/Cloud-background.png';

export default class WeatherSummary extends React.Component{
  constructor({props, weatherInfo}){
    super(props);
    this.state = {weatherInfo}
  }

  render(){
    return(
    <div className={styles.container}>
      <div className={styles.search_section}>
        <button className={styles.search_bttn}>
          Search for places</button>
        <button className={styles.my_location_bttn}>
          <span className={"material-icons"}>
            my_location</span>
        </button>
      </div>
      <div className={styles.current_weather}>
        <div className={styles.weather_image}>
          <img className={styles.background}
            src={backgroundCloud} alt={'background cloud'}></img>
          <img className={styles.weather_type}
            src={showerWeather} alt={'shower weather'}/>
        </div>
        <div className={styles.weather_status}>
          <h1>15°C</h1>
          <h3>Shower</h3>
        </div>
      </div>
      <div className={styles.datetime_container}>
        <div className={styles.datetime_section}>
          <h1>Today</h1><span>.</span>
          <p>Fri, 5 Jun</p>
        </div>    
        <div className={styles.current_location}>
          <p><span className={"material-icons"}>location_on</span> Quito</p>
        </div>
      </div>
    </div>);
  }
}