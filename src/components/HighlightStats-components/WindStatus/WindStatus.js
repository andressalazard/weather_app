import React from 'react';
import styles from './WindStatus.module.css';


export default class WindStatus extends React.Component{
  
  constructor(props){
    super(props);


    this.state = {
      speedStatus: 0,
      degrees: 0,
    }
  }


  componentDidMount(){
    let data = this.props.data;
    if(data!==undefined){
      let windSpeed = Math.round(data.windSpeed),
          windDirection = Math.round(data.windDirection);
      setInterval(() => {
        this.handleStatusChange(windSpeed);
      }, 85);

      setInterval(() => {
        this.handleDegreesChange(windDirection);
      }, 10)

    }

  }

  handleStatusChange(value){
    let speedStatus = this.state.speedStatus;
    if(speedStatus < value){
      this.setState({speedStatus: speedStatus + 1})
    }
  }

  handleDegreesChange(value){
    let degrees = this.state.degrees;
    if(degrees < 180){
      this.setState({degrees: degrees + 1})
    }
  }

  render(){
    let data = this.props.data;
    return(
      <div className={styles.container}>
        <div className={styles.wind_value}>
          <h1>{this.state.speedStatus}</h1>
          <h4>mph</h4>
        </div>
         <WindCompass direction={data.windCompass} degrees={this.state.degrees}/>
      </div>
    )
  }
}

const WindCompass = (props) => {
  const {direction, degrees} = props;

  const compass_style = {
      backgroundColor: '#585676',
      color: '#e7e7eb',
      width: '2rem',
      height: '2rem',
    
      border: 'none',
      borderRadius: '100%',
      transform:`rotate(${degrees}deg)`,
      transition: 'transform 1s ease-in-out'
  }

  return(
    <div className={styles.wind_direction}>
      {/* <button className={styles.compass}> */}
      <button style={compass_style}>
        <span className={"material-icons"}>
          navigation
        </span>
      </button>
      <h3>{direction}</h3>
    </div> 
  )

}