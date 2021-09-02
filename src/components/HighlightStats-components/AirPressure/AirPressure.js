import React from "react";
import styles from './AirPressure.module.css';


export default class AirPressure extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      airCounter: 0
    }
  }
  
  componentDidMount(){
    this.displayPressureValue();
  }

  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.clearValues();
      this.displayPressureValue();
    }
  }

  clearValues(){
    this.setState({airCounter: 0})
  }

  displayPressureValue(){
    setInterval(()=>{
      this.handleChangeCounter();
    }, 5);
  }

  handleChangeCounter(){
    let data = this.props.data;
    let counter = this.state.airCounter;
    if(counter<data.airPressure){
      this.setState({
        airCounter: counter + 1
      })
    }
  }
  
  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>{this.state.airCounter}</h1>
        <h3 className={styles.units}>mb</h3>
      </div>
    )
  }

}