import React from "react";
import styles from './AirPressure.module.css';


export default class AirPressure extends React.Component{
  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>998</h1>
        <h3 className={styles.units}>mb</h3>
      </div>
    )
  }

}