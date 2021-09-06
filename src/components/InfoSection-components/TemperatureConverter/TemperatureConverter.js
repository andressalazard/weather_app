import React, { useState, useEffect } from "react";
import styles from './TemperatureConverter.module.css';

export default class TemperatureConverter extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      selectedBttn : 'f_bttn'
    }
    
    this.setSelectedBttn = this.setSelectedBttn.bind(this);
  }
  
  setSelectedBttn(bttn){
    this.setState({selectedBttn: bttn})
  }
  
  render(){
    let changeUnits = this.props.changeTempUnits;
    let changeBttn = this.setSelectedBttn;


    return(
     <div className={styles.container}>
      <TemperatureButton
        id = {'f_bttn'}
        value = {'farenheit'}
        label = {'F°'}
        changeFunction = {changeUnits}
        changeBttn = {changeBttn}
        bttnflag = {this.state.selectedBttn}
      />
      
      <TemperatureButton 
        id = {'c_bttn'}
        value = {'celsius'}
        label = {'C°'}
        changeFunction = {changeUnits}
        changeBttn = {changeBttn}
        bttnflag = {this.state.selectedBttn}
      />
     </div>
    )
  }

}

const TemperatureButton = (props) => {

  const { id, value, label, changeFunction,
    changeBttn, bttnflag } = props;

  
  
  const [styleList, setStyleList] = useState([styles.temp_button]);
  
  
  useEffect(() => {
    function handleStyleChange(list) {
      setStyleList(list)
    }

    let classNameList = styleList;
    if(bttnflag === id){
      if(classNameList.length === 1) {
        classNameList.push(styles.selected_bttn)
      }
      
    }
    if(bttnflag !== id){
      if(classNameList.length > 1){
        classNameList.pop()
      }
    }

    return () =>{
      handleStyleChange(styleList)
    }
  }) 
    
  const changeTempUnits = () => {
    changeFunction(value);
    changeBttn(id);
    updateClassList();
  }

  const updateClassList = () => {
    let classNameList = styleList;
    if(bttnflag === id){
      if(classNameList.length === 1) {
        classNameList.push(styles.selected_bttn)
      }
      
    }
    if(bttnflag !== id){
      if(classNameList.length > 1){
        classNameList.pop()
      }
    }
  }

  return(
    <button className={styleList.join(' ')}
      onClick = {changeTempUnits}>
      { label }
    </button>
  )

}