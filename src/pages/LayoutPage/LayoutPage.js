import WeatherSummary from '../../components/WeatherSummary/WeatherSummary';
import styles from './LayoutPage.module.css';

export default function LayoutPage(){
  return(
  <div className={styles.container}>
    <WeatherSummary weatherInfo={{location: 'Quito', date: '18/8/2021'}}/>
    <div>Here goes the Info Section</div>  
  </div>
  )
}