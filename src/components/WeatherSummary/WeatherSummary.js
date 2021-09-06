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
      <ButtonsZone
        displaySearchZone={this.handleSearchZoneChange}
        currentPosition = {this.props.currentPosition}
        displayCurrentPositionWeather = {this.props.displayCurrentPositionWeather}
      />
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
            tempUnits = {this.props.tempUnits}
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
    let tempUnits = this.props.tempUnits;
    let tempValue = summaryData.current_weather.the_temp; 
    return {
      location: summaryData.title,
      temperature : (tempUnits === 'celsius') ? 
        tempValue : (tempValue * 1.8 + 32),
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
    let currentWeather = this.props.summaryData.current_weather;
    let applicable_date = currentWeather.applicable_date;
    if(applicable_date.includes('-')){
      let dateValues = applicable_date.split('-');
      dateValues = dateValues.map((value)=>{
        return parseInt(value);
      });

      let date = new Date(
        dateValues[0],
        dateValues[1] - 1,
        dateValues[2]);

      return {
        day: date.getDay(),
        date: date.getDate(),
        month: date.getMonth()
      } 

    }    
  }


}

