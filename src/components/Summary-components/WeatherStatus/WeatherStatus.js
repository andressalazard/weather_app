import styles from './WeatherStatus.module.css';

export default function WeatherStatus(props){
  return (
    <div className={styles.container}>  
        <h1>15°C</h1>
        <h3>Shower</h3>
    </div>
  )
}