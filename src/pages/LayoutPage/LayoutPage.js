import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import WeatherSummary from '../../components/WeatherSummary/WeatherSummary';
import { getWeatherData } from '../../external-files/consults';
import styles from './LayoutPage.module.css';

export default class LayoutPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weatherData : {},
    }
  }

  componentDidMount(){
    this.populateData();
  }

  async populateData(){
    getWeatherData('new york')
    .then(weatherData => {this.setState({weatherData})});
  }

  render(){
    console.log(this.state.weatherData);
    return(
      <div className={styles.container}>
        <WeatherSummary summaryData={this.setSummaryData()}/>
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