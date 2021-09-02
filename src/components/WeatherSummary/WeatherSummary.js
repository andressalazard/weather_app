import React from "react";
import styles from './WeatherSummary.module.css';

import WeatherIllustration from "../Summary-components/WeatherIllustration/WeatherIllustration";
import WeatherStatus from "../Summary-components/WeatherStatus/WeatherStatus";
import DateTime from "../Summary-components/DateTime/DateTime";
import SearchingZone from "../Summary-components/SearchingZone/SearchingZone";
import ButtonsZone from "../Summary-components/ButtonsZone/ButtonsZone";


export default class WeatherSummary extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      isSearching : false,
      currentLocation : {}
    }

    this.handleSearchZoneChange = this.handleSearchZoneChange.bind(this);
  }


  handleSearchZoneChange(){
    let searchFlag = this.state.isSearching;
    this.setState({isSearching: !searchFlag});
  }
  
  render(){
    return(
    <div className={styles.container}>
      <SearchingZone
        locationsList = {this.props.locationsList}
        searchLocation = {this.props.searchLocation}
        clearList = {this.props.clearList} 
        changeLocation = {this.props.changeLocation}
        zoneOpened={this.state.isSearching}
        changeHandler = {this.handleSearchZoneChange}
      />
      <ButtonsZone displaySearchZone={this.handleSearchZoneChange}/>
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

