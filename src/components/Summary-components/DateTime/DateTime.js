import styles from './DateTime.module.css';

export default function DateTime(){
  return(
    <div className={styles.container}>
      <div className={styles.datetime_section}>
        <h1>Today</h1><span>.</span>
        <p>Fri, 5 Jun</p>
      </div>    
    <div className={styles.current_location}>
      <p>
        <span className={"material-icons"}>
        location_on</span>
        Quito
      </p>
    </div>
  </div>)
}