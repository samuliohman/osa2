import axios from 'axios'
const baseURL = 'https://restcountries.com/v3.1/all'

const getInfo = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const exportObj = { getInfo }
export default exportObj