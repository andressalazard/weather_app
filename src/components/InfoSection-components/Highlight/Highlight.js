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
          <WeatherStat/>
          <WeatherStat/>
          <WeatherStat/>
          <WeatherStat/>
        </div>
      </div>
    )
  }
}