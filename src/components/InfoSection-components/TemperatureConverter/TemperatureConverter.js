import React from "react";
import styles from './TemperatureConverter.module.css';

export default class TemperatureConverter extends React.Component{

  render(){
    return(<div className={styles.container}>
      <button className={styles.temp_button}>°C</button>
      <button className={[styles.temp_button, styles.selected_bttn].join(' ')}>°F</button>
    </div>)
  }
}