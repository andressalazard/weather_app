import React from "react";
import Highlight from "../InfoSection-components/Highlight/Highlight";
import TemperatureConverter from "../InfoSection-components/TemperatureConverter/TemperatureConverter";
import WeatherForecast from "../InfoSection-components/WeatherForecast/WeatherForecast";
import styles from './InfoSection.module.css';

export default class InfoSection extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <TemperatureConverter/>
        <WeatherForecast/>
        <Highlight/>
        <div>Here goes the footer section</div>
      </div>
    )
  }
}