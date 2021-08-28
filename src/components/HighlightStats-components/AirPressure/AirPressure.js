import React from "react";
import styles from './AirPressure.module.css';


export default class AirPressure extends React.Component{
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('I receive this =>', this.props.data);
  }
  
  render(){
    let data = this.props.data;
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>{data.airPressure}</h1>
        <h3 className={styles.units}>mb</h3>
      </div>
    )
  }

}