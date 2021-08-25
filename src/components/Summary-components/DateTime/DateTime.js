import React from 'react';
import { daysList, monthsList } from '../../../external-files/consults';
import styles from './DateTime.module.css';

export default class DateTime extends React.Component{
  
  render(){
    return(
      <div className={styles.container}>
        {this.displayDate()}
      <div className={styles.current_location}>
        <p>
          <span className={"material-icons"}>
          location_on</span>
          {this.props.location}
        </p>
      </div>
    </div>)
  }

  displayDate(){
    let dateInfo = this.props.date;
    return(
      <div className={styles.datetime_section}>
        <h1>Today</h1><span>.</span>
        <p>
          {daysList[dateInfo.day]}, 
          {dateInfo.date} 
          {monthsList[dateInfo.month]}
        </p>
      </div>
    )
  }
}