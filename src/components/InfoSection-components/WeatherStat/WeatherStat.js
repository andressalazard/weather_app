import React from "react";
import { weatherStatsList } from "../../../external-files/consults";
import AirPressure from "../../HighlightStats-components/AirPressure/AirPressure";
import Humidity from "../../HighlightStats-components/Humidity/Humidity";
import Visibility from "../../HighlightStats-components/Visibility/Visibility";
import WindStatus from "../../HighlightStats-components/WindStatus/WindStatus";
import styles from './WeatherStat.module.css';

export default class WeatherStat extends React.Component{
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('I receive this =>', this.props.statData);
  }
  
  render(){
    return(
      (this.props.statData!==undefined)
        &&this.displayStatCard()
    )
    
  }


  displayContent(type, data){

    if(type===weatherStatsList[0].key){
      return <WindStatus data={data}/>;
    }

    if(type===weatherStatsList[1].key){
      return <Humidity data={data}/>;
    }

    if(type===weatherStatsList[2].key){
      return <Visibility data={data}/>;
    }

    if(type===weatherStatsList[3].key){
      return <AirPressure data={data}/>;
    }
    
  }

  displayStatCard(){
    let statData = this.props.statData;
    let type = statData.type, data = statData.data,
        statInfo = weatherStatsList
          .find((stat)=>{return stat.key === type}),
        content = this.displayContent(type, data);

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