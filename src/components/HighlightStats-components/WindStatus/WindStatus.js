import React from 'react';
import styles from './WindStatus.module.css';


export default class WindStatus extends React.Component{
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('I receive this =>', this.props.data);
  }

  render(){
    let data = this.props.data;
    return(
      <div className={styles.container}>
        <div className={styles.wind_value}>
          <h1>{Math.round(data.windSpeed)}</h1>
          <h4>mph</h4>
        </div>
         <div className={styles.wind_direction}>
            <button className={styles.compass}>
              <span className={"material-icons"}>
              navigation
              </span>
            </button>
            <h3>{data.windCompass}</h3>
         </div> 
      </div>
    )
  }
}