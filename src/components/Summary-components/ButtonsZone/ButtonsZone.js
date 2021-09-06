import React from 'react';
import { getMyLocationWeatherData } from '../../../external-files/api-calls';
import styles from './ButtonsZone.module.css';


export default class ButtonsZone extends React.Component{
  
  render(){
    let displayCurrentPositionWeather = this.props.displayCurrentPositionWeather;
    let displayZone = this.props.displaySearchZone;
    return(
      <div className={styles.container}>
        <button className={styles.search_bttn}
          onClick={displayZone}>
          Search for places</button>
        <button className={styles.my_location_bttn}
          onClick={displayCurrentPositionWeather}>
          <span className={"material-icons"}>
            my_location</span>
        </button>
    </div>
    )
  }

}