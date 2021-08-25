import styles from './WeatherIllustration.module.css'
import React from 'react';
import { weatherStateIcons } from '../../../external-files/consults';

const WEATHER_STATES_URL= '/images/weatherStates/';
const BACKGROUND_URL = '/images/background/Cloud-background.png';

export default class WeatherIllustration extends React.Component{
  
  render(){
    return(
      <div className={styles.container}>
          <img className={styles.background}
            src={BACKGROUND_URL} alt={'background cloud'}></img>
          {(this.props.weatherState)
          && this.displayWeatherState()}
      </div>
    )
  }

  displayWeatherState(){
    let weatherStateKey = this.props.weatherState;
    let foundState = weatherStateIcons
      .filter((state)=>{
        return state.key === weatherStateKey;
      });

    let weatherImagesURL = WEATHER_STATES_URL+
      foundState[0].icon_url;
    
    return (
      <img className={styles.weather_icon}
        src={weatherImagesURL} 
        alt={foundState.description}/>)
  }

}