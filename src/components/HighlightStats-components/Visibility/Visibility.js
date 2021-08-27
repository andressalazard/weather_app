import React from "react";
import styles from './Visibility.module.css';

export default class Visibility extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>6.4</h1>
        <h3 className={styles.units}>miles</h3>
      </div>
    );
  }
}