import React from 'react';
import styles from './WindStatus.module.css';


export default class WindStatus extends React.Component{
  
  render(){
    return(
      <div className={styles.container}>
        <div className={styles.wind_value}>
          <h1>7</h1>
          <h4>mph</h4>
        </div>
         <div className={styles.wind_direction}>
            <button className={styles.compass}>
              <span className={"material-icons"}>
              navigation
              </span>
            </button>
            <h3>WSW</h3>
         </div> 
      </div>
    )
  }
}