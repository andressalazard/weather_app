import React from "react";
import styles from './Visibility.module.css';

export default class Visibility extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      visibilityCounter : 0
    }
  }
  
  componentDidMount(){
    this.displayCounterValue();
  }

  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.clearValues();
      this.displayCounterValue();
    }
  }

  clearValues(){
    this.setState({visibilityCounter: 0})
  }

  displayCounterValue(){
    setInterval(()=>{
      this.handleCounterChange();
    },8);
  }

  
  render(){
    return(
      <div className={styles.container}>
        <h1 className={styles.value}>{this.state.visibilityCounter}</h1>
        <h3 className={styles.units}>miles</h3>
      </div>
    );
  }

  handleCounterChange(){
    let data = this.props.data;
    let counter = this.state.visibilityCounter;

    if(parseFloat(counter)<data.visibility){
      this.setState({visibilityCounter : parseFloat((counter + 0.01).toFixed(2))});
    }

  }
}