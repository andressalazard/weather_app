import React from "react";
import styles from './WeatherSummary.module.css';

export default class WeatherSummary extends React.Component{
  constructor({props, weatherInfo}){
    super(props);
    this.state = {weatherInfo}
  }

  render(){
    return(
    <div className={styles.container}>
      Hello there I'm the weather Summary!
    </div>);
  }
}