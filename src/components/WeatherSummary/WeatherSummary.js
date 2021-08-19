import React from "react";
import styles from './WeatherSummary.module.css';

import WeatherIllustration from "../Summary-components/WeatherIllustration/WeatherIllustration";
import WeatherStatus from "../Summary-components/WeatherStatus/WeatherStatus";
import DateTime from "../Summary-components/DateTime/DateTime";
import SearchingZone from "../Summary-components/SearchingZone/SearchingZone";


export default class WeatherSummary extends React.Component{
  constructor({props, weatherInfo}){
    super(props);
    this.state = {weatherInfo}
  }

  render(){
    return(
    <div className={styles.container}>
      <SearchingZone/>
      
      <div>
        <WeatherIllustration/>
        <WeatherStatus/>
      </div>

      <DateTime/>
    </div>);
  }
}