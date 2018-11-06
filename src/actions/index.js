import axios from 'axios';
// YOUR OPENWEATHERMAP API KEY
const API_KEY = '91246173d40a5a56cdd56f638dfadb9d';
// OLD STYLE
// const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}