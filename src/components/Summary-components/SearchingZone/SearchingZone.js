import styles from './SearchingZone.module.css';

export default function SearchingZone(){
  return(
    <div className={styles.container}>
        <button className={styles.search_bttn}>
          Search for places</button>
        <button className={styles.my_location_bttn}>
          <span className={"material-icons"}>
            my_location</span>
        </button>
      </div>
  )
}