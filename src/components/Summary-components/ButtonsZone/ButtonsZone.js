import React from 'react';
import styles from './ButtonsZone.module.css';


export default class ButtonsZone extends React.Component{
  
  render(){
    let displayZone = this.props.displaySearchZone;
    return(
      <div className={styles.container}>
        <button className={styles.search_bttn} onClick={displayZone}>
          Search for places</button>
        <button className={styles.my_location_bttn}>
          <span className={"material-icons"}>
            my_location</span>
        </button>
    </div>
    )
  }

}