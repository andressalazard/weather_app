import React from 'react';
import { daysList, monthsList } from '../../../external-files/consults';
import styles from './DateTime.module.css';

export default class DateTime extends React.Component{
  
  render(){
    return(
      <div className={styles.container}>
        {this.displayDate()}
      <div className={styles.current_location}>
        <h5>
          <span className={"material-icons"}>
          location_on</span>
          {this.props.location}
        </h5>
      </div>
    </div>)
  }

  displayDate(){
    let dateInfo = this.props.date;
    return(
      <div className={styles.datetime_section}>
        <h1>Today</h1>
        <span className={"material-icons"}>
          trip_origin
        </span>
        <div className={styles.actual_date}>
          <h3>{daysList[dateInfo.day]},</h3>
          <h3>{dateInfo.date}</h3>
          <h3>{monthsList[dateInfo.month]}</h3>
        </div>
      </div>
    )
  }
}