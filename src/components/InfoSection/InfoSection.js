import React from "react";
import Highlight from "../InfoSection-components/Highlight/Highlight";
import TemperatureConverter from "../InfoSection-components/TemperatureConverter/TemperatureConverter";
import WeatherForecast from "../InfoSection-components/WeatherForecast/WeatherForecast";
import styles from './InfoSection.module.css';

export default class InfoSection extends React.Component{

  render(){
    this.setForecastData();

    return(
      <div className={styles.container}>
        <TemperatureConverter
          changeTempUnits={this.props.changeTempUnits}
        />
        <WeatherForecast
            forecastData={this.setForecastData()}
            tempUnits = {this.props.tempUnits}/>
        <Highlight 
            highlightData={this.setHighLightData()}/>
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
    let tempUnits = this.props.tempUnits;
    if(weatherData!==undefined){
      return (weatherData.map((data) => {
        if(data!==weatherData[0]){
          return {
            date: (data===weatherData[1])? "Tomorrow" : data.applicable_date,
            weather_state_key: data.weather_state_abbr,
            temp:{
              max: (tempUnits==='celsius')?data.max_temp : (data.max_temp * 1.8 + 32),
              min: (tempUnits==='celsius')?data.min_temp : (data.min_temp * 1.8 + 32)
            }
          }
        }
        return {};
      }).slice(1));
    }
  }

  setHighLightData(){
    let weatherData = this.props.weatherStatus;
    if(weatherData!==undefined){
      return weatherData[0];
    }
  }
}