import { URL_LOCATION_SEARCH, URL_WEATHER_DATA_SEARCH } from "./consults"
import axios from "axios";

export const getLocations = async (query) => {
  let url = URL_LOCATION_SEARCH+`${query}`;
  const locationsList = await axios.get(url)
  .then(response => {
    return response.data
  });
  return locationsList;
}

export const getWeatherInfo = async (woeid) => {
  let url = URL_WEATHER_DATA_SEARCH+`${woeid}`;
  const weatherData = await axios.get(url)
  .then(response => {
    return response.data
  });
  return weatherData;
}