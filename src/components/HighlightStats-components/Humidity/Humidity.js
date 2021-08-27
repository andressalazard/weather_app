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
        <div className={styles.progress_bar}>
          Here goes progress Barr
        </div>
      </div>
    )
  }
}