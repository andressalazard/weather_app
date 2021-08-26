import React from "react";
import styles from './InfoSection.module.css';

export default class InfoSection extends React.Component{

  render(){
    return(
      <div className={styles.container}>
        <div>Here goes the Temperature converter</div>
        <div>Here goes the forecast section</div>
        <div>Here goes the highlight section</div>
        <div>Here goes the footer section</div>
      </div>
    )
  }
}