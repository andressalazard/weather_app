import React from "react";
import styles from './WeatherStat.module.css';

export default class WeatherStat extends React.Component{
  render(){
    return(
    <div className={styles.container}>
      <h1 className={styles.stat_title}>Wind Status</h1>
      <div className={styles.stat_content}>
        Here goes the content!
      </div>
    </div>
    )
  }
}