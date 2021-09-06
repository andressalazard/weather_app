import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import WeatherSummary from '../../components/WeatherSummary/WeatherSummary';
import { getLocations, getMyLocationWeatherData, getWeatherInfo } from '../../external-files/api-calls';
import { getWeatherData } from '../../external-files/consults';
import styles from './LayoutPage.module.css';

export default class LayoutPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLocation : {},
      currentPosition: {
        latt: '',
        long: ''
      },
      weatherData : {},
      locationsList: [],
      tempUnits: 'celsius',
    }

    this.searchLocation = this.searchLocation.bind(this);
    this.clearLocationsList = this.clearLocationsList.bind(this);
    this.changeCurrentLocation = this.changeCurrentLocation.bind(this);
    this.setTemperatureUnits = this.setTemperatureUnits.bind(this);
    this.setCurrentPosition = this.setCurrentPosition.bind(this);
    this.displayCurrentPositionWeather = this.displayCurrentPositionWeather.bind(this);
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
    this.getMyPosition(this.setCurrentPosition);
  }

  getMyPosition(setPositionFunction){

    const options = {
      enableHighAccuracy : true,
      timeout: 5000,
      maximumAge: 0 
    }

    function success(position){
      var crd = position.coords;

      setPositionFunction({
        latt: crd.latitude,
        long: crd.longitude})

    }

    function error(error){
      console.warn('ERROR(',error.code,'): ',error.message);
    }

    navigator.geolocation.getCurrentPosition(success, error, options); 
  }



  async searchLocation(keyword){
    getLocations(keyword)
    .then(locationsList => {
      if(locationsList.length>12){
        locationsList.splice(12);          
      }
      this.setState({locationsList})});
  }

  clearLocationsList(){
    this.setState({locationsList: []})
  }

  changeCurrentLocation(value){
    if(value!==undefined){
      this.setState({currentLocation: value})
    }
  }

  setTemperatureUnits(newUnits){
    this.setState({tempUnits: newUnits})
  }

  setCurrentPosition(position){
    this.setState((prevState) => ({
      currentPosition: {
        ...prevState.currentPosition,
        latt: position.latt,
        long: position.long
      }
    }))
  }


  async populateData(){
    getWeatherData('new york')
    .then(weatherData => {this.setState({weatherData})});
  }

  async setWeatherData(woeid){
    getWeatherInfo(woeid)
    .then(weatherData => {this.setState({weatherData})});
  }

  displayCurrentPositionWeather(){
    let currentPosition = this.state.currentPosition;
    if(currentPosition.latt !=='' && currentPosition.long !== ''){
      let latt = currentPosition.latt.toFixed(4),
        long = currentPosition.long.toFixed(4);

      let lattlong = `${latt.toString()},${long.toString()}`;
      getMyLocationWeatherData(lattlong)
      .then(response => {
        let woeid = response.data[0].woeid;
        this.setWeatherData(woeid);
      });
    }
  }

  render(){
    return(
      <div className={styles.container}>
        <WeatherSummary 
          summaryData={this.setSummaryData()}
          tempUnits = {this.state.tempUnits} 
          locationsList = {this.state.locationsList}
          searchLocation = {this.searchLocation}
          clearList = {this.clearLocationsList}
          changeLocation = {this.changeCurrentLocation}
          currentPosition = {this.state.currentPosition}
          displayCurrentPositionWeather = {this.displayCurrentPositionWeather}
          />
        <InfoSection
          tempUnits = {this.state.tempUnits} 
          weatherStatus={this.retrieveWeatherStatusData()}
          changeTempUnits = {this.setTemperatureUnits}
          />
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