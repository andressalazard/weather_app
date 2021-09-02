import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import WeatherSummary from '../../components/WeatherSummary/WeatherSummary';
import { getLocations, getWeatherInfo } from '../../external-files/api-calls';
import { getWeatherData } from '../../external-files/consults';
import styles from './LayoutPage.module.css';

export default class LayoutPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : {},
      weatherData : {},
      locationsList: [],
    }

    this.searchLocation = this.searchLocation.bind(this);
    this.clearLocationsList = this.clearLocationsList.bind(this);
    this.changeCurrentLocation = this.changeCurrentLocation.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    let currentLocation = this.state.currentLocation;
    if(prevState.currentLocation!==this.state.currentLocation){
      let woeid = currentLocation.woeid;
      this.setWeatherData(woeid);
    }
  }

  componentDidMount(){
    this.populateData();
  }

  async searchLocation(keyword){
    getLocations(keyword)
    .then(locationsList => {this.setState({locationsList})});
  }

  clearLocationsList(){
    this.setState({locationsList: []})
  }

  changeCurrentLocation(value){
    if(value!==undefined){
      this.setState({currentLocation: value})
    }
  }


  async populateData(){
    getWeatherData('new york')
    .then(weatherData => {this.setState({weatherData})});
  }

  async setWeatherData(woeid){
    getWeatherInfo(woeid)
    .then(weatherData => {this.setState({weatherData})});
  }

  render(){
    return(
      <div className={styles.container}>
        <WeatherSummary 
          summaryData={this.setSummaryData()}
          locationsList = {this.state.locationsList}
          searchLocation = {this.searchLocation}
          clearList = {this.clearLocationsList}
          changeLocation = {this.changeCurrentLocation}
          />
        <InfoSection weatherStatus={this.retrieveWeatherStatusData()}/>
      </div>
      )
  }

  setSummaryData(){
    let weatherData = this.state.weatherData;
    if(Object.keys(weatherData).length!==0){
      const summaryData = {
        title: weatherData.title,
        current_weather: weatherData.consolidated_weather[0],
        latt_long: weatherData.latt_long
      };

      return summaryData;
    }
  }

  retrieveWeatherStatusData(){
    let weatherData = this.state.weatherData;
    if(Object.keys(weatherData).length!==0){
      const statusData = weatherData.consolidated_weather;
      return statusData;
    };
  }

}