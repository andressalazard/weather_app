import React from 'react';
import styles from './SearchingZone.module.css';

export default class SearchingZone extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      stylesList : [styles.container]
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
      let zoneFlag = this.props.zoneOpened;
      let stylesList = this.state.stylesList;
      if(zoneFlag){
        stylesList.push(styles.open_container);
        this.setState({stylesList})
      }

      if(!zoneFlag){
        if(stylesList.length>1){
          stylesList.pop();
          this.setState({stylesList})
        }
      }
    }
    
  }
  
  render(){
    return(
      <div className = {this.state.stylesList.join(' ')}>
          <div className={styles.header}>
            <button className={styles.close_button}
              onClick={this.props.changeHandler}>
              <span className={"material-icons"}>
                close
              </span>
            </button>
            <form className={styles.search_form}>
              <div className={styles.input_field}>
                <span className={"material-icons"}>search</span>
                <input type='text' name='search' placeholder="search location"/>
              </div>
              <button type='submit'>Search</button>
            </form>
          </div>

      </div>
    )
  }


}
