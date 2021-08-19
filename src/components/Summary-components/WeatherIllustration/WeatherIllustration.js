import styles from './WeatherIllustration.module.css'
import backgroundCloud from '../../../images/background/Cloud-background.png';
import showerWeather from '../../../images/weatherTypes/Shower.png';

export default function WeatherIllustration(){
  return(
    <div className={styles.container}>
        <img className={styles.background}
          src={backgroundCloud} alt={'background cloud'}></img>
        <img className={styles.weather_icon}
          src={showerWeather} alt={'shower weather'}/>
    </div>
  )

}