import React from "react";
import TemperatureConverter from "../InfoSection-components/TemperatureConverter/TemperatureConverter";
import styles from './InfoSection.module.css';

export default class InfoSection extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <TemperatureConverter/>
        <div>Here goes the forecast section</div>
        <div>Here goes the highlight section</div>
        <div>Here goes the footer section</div>
      </div>
    )
  }
}