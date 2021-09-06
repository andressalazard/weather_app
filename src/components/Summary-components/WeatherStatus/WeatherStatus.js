import React from 'react';
import styles from './WeatherStatus.module.css';

export default class WeatherStatus extends React.Component{
  
  render(){
    return (
      <div className={styles.container}>  
          <h1>{Math.round(this.props.temp)}
            <span>{(this.props.tempUnits === 'celsius')?'°C': '°F'}</span>
          </h1>
          <h3>{this.props.weatherName}</h3>
      </div>
    )
  }


}