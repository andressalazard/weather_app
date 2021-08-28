import React from "react";
import WeatherStat from "../WeatherStat/WeatherStat";
import styles from './Highlight.module.css';

export default class Highlight extends React.Component{
  
  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.title}>
          Today's Highlights
        </h1>
        <div className={styles.stats_section}>
          <WeatherStat statData={this.setData("WIND")}/>
          <WeatherStat statData={this.setData("HUMD")}/>
          <WeatherStat statData={this.setData("VISB")}/>
          <WeatherStat statData={this.setData("AIRP")}/>
        </div>
      </div>
    )
  }

  setData(type){
    let highlightData = this.props.highlightData,
        content={type};

    if(highlightData!==undefined && type==="WIND"){
      content.data = {
        windDirection: highlightData.wind_direction,
        windCompass: highlightData.wind_direction_compass,
        windSpeed: highlightData.wind_speed
      };
      return content;
    }
    
    if(highlightData!==undefined && type==="HUMD"){
      content.data = {
        humidity:  highlightData.humidity
      };
      return content;
    }

    if(highlightData!==undefined && type==="VISB"){
      content.data = {
        visibility: highlightData.visibility
      };
      return content;
    }

    if(highlightData!==undefined && type==="AIRP"){
      content.data = {
        airPressure: highlightData.air_pressure
      }
      return content;
    }
  }
}