import React from 'react';
import styles from './WeatherStatus.module.css';

export default class WeatherStatus extends React.Component{
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('I get this: ',this.props);
  }

  render(){
    return (
      <div className={styles.container}>  
          <h1>{Math.round(this.props.temp)}°C</h1>
          <h3>{this.props.weatherName}</h3>
      </div>
    )
  }


}