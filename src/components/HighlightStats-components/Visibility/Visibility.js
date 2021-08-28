import React from "react";
import styles from './Visibility.module.css';

export default class Visibility extends React.Component{

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('I receive this =>', this.props.data);
  }
  
  render(){
    let data = this.props.data;
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>{data.visibility.toFixed(2)}</h1>
        <h3 className={styles.units}>miles</h3>
      </div>
    );
  }
}