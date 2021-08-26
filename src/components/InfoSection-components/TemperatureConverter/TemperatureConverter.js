import React from "react";
import styles from './TemperatureConverter.module.css';

export default class TemperatureConverter extends React.Component{

  render(){
    return(<div className={styles.container}>
      <button className={styles.temp_button}>°F</button>
      <button className={[styles.temp_button, styles.selected_bttn].join(' ')}>°C</button>
    </div>)
  }
}