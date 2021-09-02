import React from 'react';
import { compassPoints } from '../../../external-files/consults';
import styles from './WindStatus.module.css';


export default class WindStatus extends React.Component{
  
  constructor(props){
    super(props);


    this.state = {
      speedStatus: 0,
      degrees: 0,
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.clearValues();
     this.displayValues();
    }
  }


  componentDidMount(){
    this.displayValues();
  }

  clearValues(){
    this.setState({speedStatus: 0});
    this.setState({degrees: 0});
  }

  displayValues(){
    setInterval(() => {
      this.handleStatusChange();
    }, 400);

    setInterval(() => {
      this.handleDegreesChange();
    }, 10)
  }

  handleStatusChange(){
    let windSpeed = this.props.data.windSpeed;
    let speedStatus = this.state.speedStatus;
    if(speedStatus < windSpeed){
      this.setState({speedStatus: speedStatus + 1})
    }
  }

  handleDegreesChange(){
    let windCompass = this.props
    .data.windCompass;

    let compassPoint = compassPoints
      .find((point) =>{
        return point.key === windCompass;
      });

    
    let degrees = this.state.degrees;
    if(degrees < compassPoint.degree){
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
        <span className={["material-icons", styles.compass_icon].join(' ')}>
          navigation
        </span>
      </button>
      <h3>{direction}</h3>
    </div> 
  )

}