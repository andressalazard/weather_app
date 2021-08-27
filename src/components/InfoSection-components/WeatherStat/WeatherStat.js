import React from "react";
import { weatherStatsList } from "../../../external-files/consults";
import AirPressure from "../../HighlightStats-components/AirPressure/AirPressure";
import Humidity from "../../HighlightStats-components/Humidity/Humidity";
import Visibility from "../../HighlightStats-components/Visibility/Visibility";
import WindStatus from "../../HighlightStats-components/WindStatus/WindStatus";
import styles from './WeatherStat.module.css';

export default class WeatherStat extends React.Component{
  render(){
    return(
      (this.props.type)&&this.displayStatCard()
    )
    
  }


  displayContent(type){
    if(type===weatherStatsList[0].key){
      return <WindStatus/>;
    }

    if(type===weatherStatsList[1].key){
      return <Humidity/>;
    }

    if(type===weatherStatsList[2].key){
      return <Visibility/>;
    }

    if(type===weatherStatsList[3].key){
      return <AirPressure/>;
    }
    
  }

  displayStatCard(){
    let type = this.props.type,
        statInfo = weatherStatsList
          .find((stat)=>{return stat.key === type}),
        content = this.displayContent(type);

    return(
      <div className={styles.container}>
        <h1 className={styles.stat_title}>{statInfo.title}</h1>
        <div className={styles.stat_content}>
          {content}
        </div>
      </div>
    )



  }
}