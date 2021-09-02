import React from 'react';
import styles from './SearchingZone.module.css';

export default class SearchingZone extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      stylesList : [styles.container],
      searchValue : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
    // if(prevProps !== this.props){
    if(prevProps.zoneOpened !== this.props.zoneOpened){
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
        this.clearValues();
      }
    } 
  }

  handleChange(event){
    this.setState({searchValue: event.target.value});
  }

  clearValues(){
    this.props.clearList();
    this.setState({searchValue: ''})
  }

  handleSubmit(event){
    event.preventDefault();

    let keyword = this.state.searchValue;
    this.props.searchLocation(keyword);
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
            <form className={styles.search_form}
              onSubmit={this.handleSubmit}>
              <div className={styles.input_field}>
                <span className={"material-icons"}>search</span>
                <input type='text' name='search' 
                  placeholder="search location"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                  />
              </div>
              {/* <button type='submit'>Search</button> */}
              <input className= {styles.submit_button} type='submit' value='Search'/>
            </form>
          </div>

          {this.displayResults()}
  
      </div>
    )
  }

  displayResults(){
    let locationsList = this.props.locationsList;

    return ((locationsList.length>0)&&
      <div className={styles.search_results}>
        {locationsList.map((value, index) => {
          return(<SearchResult 
            value={value} key={index}
            selectLocation = {this.props.changeLocation}
            />)
        })}
      </div>
    )

  }


}

const SearchResult = (props) => {
  let { value } = props;

  return(
    <button className={styles.result_container} onClick={()=>{
      props.selectLocation(value)}}>
      <h1>{value.title}</h1>
      <span className={["material-icons",styles.result_icon].join(' ')}>navigate_next</span>
    </button>
  )
}
