import React from "react";
import styles from './WeatherSummary.module.css';

import WeatherIllustration from "../Summary-components/WeatherIllustration/WeatherIllustration";
import WeatherStatus from "../Summary-components/WeatherStatus/WeatherStatus";
import DateTime from "../Summary-components/DateTime/DateTime";
import SearchingZone from "../Summary-components/SearchingZone/SearchingZone";


export default class WeatherSummary extends React.Component{

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('props in child component', this.props.summaryData);
  }

  componentDidMount(){
  }

  render(){
    return(
    <div className={styles.container}>
      <SearchingZone/>
      {(this.props.summaryData) 
        && this.displayWeatherStatus()}
    </div>);
  }


  displayWeatherStatus(){
    let weatherData = this.getWeatherData();
    
    return(
      <div>
        <div>
          <WeatherIllustration 
            weatherState={weatherData.state.key}/>
          <WeatherStatus
            temp = {weatherData.temperature} 
            weatherName = {weatherData.state.name}/>
        </div>

        <DateTime
          date={weatherData.dateTime}
          location={weatherData.location}/>
      </div>
    )
  }

  getWeatherData(){
    let summaryData = this.props.summaryData;
    return {
      location: summaryData.title,
      temperature : summaryData
      .current_weather.the_temp,
      state : {
        key : summaryData
        .current_weather.weather_state_abbr,
        name : summaryData
        .current_weather.weather_state_name,
      },
      dateTime : this.getDateTime()
    }
  }

  getDateTime(){
    let date = new Date();
    return {
      day: date.getDay(),
      date: date.getDate(),
      month: date.getMonth()
    } 
  }

}