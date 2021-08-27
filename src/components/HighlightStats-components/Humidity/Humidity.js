import React from "react";
import styles from './Humidity.module.css';

export default class Humidity extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <div className={styles.humidity_value}>
          <h1>84</h1>
          <h4>%</h4>
        </div>
        <div className={styles.bar_container}>
          <div className={styles.bar_header}>
            <h6>0</h6>
            <h6>50</h6>
            <h6>100 %</h6>
          </div>
          <div className={styles.progress_status}>
            <div className={styles.progress_bar}>
            </div>
          </div>
        </div>
      </div>
    )
  }
}