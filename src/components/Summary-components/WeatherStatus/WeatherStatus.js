import React from 'react';
import styles from './WeatherStatus.module.css';

export default class WeatherStatus extends React.Component{
  
  render(){
    return (
      <div className={styles.container}>  
          <h1>{Math.round(this.props.temp)}<span>°C</span></h1>
          <h3>{this.props.weatherName}</h3>
      </div>
    )
  }


}