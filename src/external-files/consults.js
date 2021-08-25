import axios from "axios";

export const URL_LOCATION_SEARCH = 'http://localhost:5050/api/weather/search/location/';
export const URL_WEATHER_DATA_SEARCH = 'http://localhost:5050/api/weather/location/';


export const getWeatherData = async (query) => { 
  let url = URL_LOCATION_SEARCH+`${query}`;

  const weatherData = await axios.get(url)
    .then(response => {
      const queryResults = response.data;
      const woeid = queryResults[0].woeid;
      url = URL_WEATHER_DATA_SEARCH+`${woeid}`;
      
      
      return axios.get(url)
      .then(response =>  response.data);
  });

  return weatherData;
}


export const daysList = [
  'Sun','Mon','Tues',
  'Wed',' Thurs','Fri',
  'Sat'
]

export const monthsList = [
  'Jan','Feb','Mar',
  'Apr','May','June',
  'July','Aug','Sept',
  'Oct','Nov','Dec'
];


export const weatherStateIcons = [
  {
    key: 'c',
    icon_url: 'Clear.png',
    description: 'clear weather'
  },

  {
    key: 'h',
    icon_url: 'Hail.png',
    description: 'hail weather'
  },

  {
    key: 'hr',
    icon_url: 'HeavyRain.png',
    description: 'heavy rain weather'

  },

  {
    key: 'lc',
    icon_url: 'LightCloud.png',
    description: 'light cloud weather'
  },

  {
    key: 'lr',
    icon_url: 'LightRain.png',
    description: 'light rain weather'
  },

  {
    key: 's',
    icon_url: 'Shower.png',
    description: 'showers weather'
  },

  {
    key: 'sl',
    icon_url: 'Sleet.png',
    description: 'sleet weather'
  },

  {
    key: 'sn',
    icon_url: 'Snow.png',
    description: 'snow weather'
  },

  {
    key: 't',
    icon_url: 'Thunderstorm.png',
    description: 'thunderstorm weather'
  }
]
  

  




