import React from "react";
import styles from './Humidity.module.css';

export default class Humidity extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      completed: 0
    }

  }

  componentDidMount(){
    this.animateProgressBar();
  }

  componentDidUpdate(prevProps){
    if(prevProps!==this.props){
      this.clearValues();
      this.animateProgressBar();
    }
  }

  clearValues(){
    this.setState({completed: 0})
  } 

  animateProgressBar(){
    setInterval(()=>{
      this.changeCompleteStatus()},30);
  }

  changeCompleteStatus(value){
    let humidity = Math.round(this.props.data.humidity);
    let completed = this.state.completed;
    if(completed<humidity){
      this.setState({completed: completed + 1})
    }
  }

  render(){

    return(
      <div className={styles.container}>
        <div className={styles.humidity_value}>
          <h1>{this.state.completed}</h1>
          <h4>%</h4>
        </div>
        <div className={styles.bar_container}>
          <div className={styles.bar_header}>
            <h6>0</h6>
            <h6>50</h6>
            <h6>100</h6>
          </div>
          <ProgressBar completed={this.state.completed}/>
        </div>
      </div>
    )
  }

}

const ProgressBar = (props)=>{
  const { completed } = props;

  const filler_styles = {
    borderRadius: '10px',
    backgroundColor: '#ffec65',
    height: '1.25rem',
    width: `${completed}%`,
    transition: 'width 1s ease-in-out',
  }
  return(
    <div className={styles.progress_bar_container}>
      <div style={filler_styles}>
      </div>
    </div>
  )



}