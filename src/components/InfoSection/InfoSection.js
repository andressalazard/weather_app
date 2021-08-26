import React from "react";
import Highlight from "../InfoSection-components/Highlight/Highlight";
import TemperatureConverter from "../InfoSection-components/TemperatureConverter/TemperatureConverter";
import WeatherForecast from "../InfoSection-components/WeatherForecast/WeatherForecast";
import styles from './InfoSection.module.css';

export default class InfoSection extends React.Component{

  // componentDidUpdate(prevProps, prevState, snapshot){
  //   console.log('I receive this =>', this.props.weatherStatus);
  // }

  render(){
    this.setForecastData();

    return(
      <div className={styles.container}>
        <TemperatureConverter/>
        <WeatherForecast
            forecastData={this.setForecastData()}/>
        <Highlight/>
        <div className={styles.footer}>
        <p>Created by <a href={'https://github.com/andressalazard/'}>
          andressalazard
        </a> - devChallenges.io</p>
        </div>
      </div>
    )
  }


  setForecastData(){
    let weatherData = this.props.weatherStatus;
    if(weatherData!==undefined){
      return weatherData.map((data) => {
        if(data!==weatherData[0]){
          return {
            date: (data===weatherData[1])? "Tomorrow" : data.applicable_date,
            weather_state_key: data.weather_state_abbr,
            temp:{
              max: data.max_temp,
              min: data.min_temp
            }
          }
        }
      }).slice(1);
    }
  }
}