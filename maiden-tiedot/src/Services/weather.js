import axios from 'axios'

const API_KEY = 'c1ffc70509f8437b8d0125833231703'
const API_LINK = 'http://api.weatherapi.com/v1/current.json'

const getWeather = (city) => {
    const request = axios.get(`${API_LINK}?key=${API_KEY}&q=${city}`)
    return request.then(result => result.data)
}

const exportObj = { getWeather }
export default exportObj