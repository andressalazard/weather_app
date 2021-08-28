import React, { useState } from "react";
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

  animateProgressBar(){
    if(this.props.data!==undefined){
      let value = Math.round(this.props.data.humidity);
      setInterval(()=>{this.changeCompleteStatus(value)},10);
    }
  }

  changeCompleteStatus(value){
    let completed = this.state.completed;
    if(completed<value){
      this.setState({completed: completed + 1})
    }
  }

  render(){

    let data = this.props.data;
    return(
      <div className={styles.container}>
        <div className={styles.humidity_value}>
          <h1>{Math.round(data.humidity)}</h1>
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

  displayProgressBar(){
    if(this.props.data!==undefined){
      let value = this.props.data.humidity;
      let element = document.getElementById(styles.progress_bar);
      let width = 0;
      let identity = setInterval(scene, 10);
      function scene(){
        if (width >= value){
          clearInterval(identity)
        }else{
          width++;
          element.style.width = width + '%';
        }
      }
    }
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