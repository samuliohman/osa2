import Filter from './Components/Filter.js'
import Countries from './Components/Countries.js'
import countryService from './Services/countries.js'
import weatherService from './Services/weather.js'
import { useState, useEffect } from 'react'


function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weatherInfo, setWeatherInfo] = useState([])

  useEffect(() => {
    countryService.getInfo().then(info => {
      setCountries(info)
    })
  }, [])

  const updateFilter = (event) => {
    const newFilter = event.target.value
    setFilter(newFilter)

    const tempCountries = countries.filter(country =>
      country["name"]["common"].toLowerCase().includes(newFilter))

    if (tempCountries.length === 1) {
      weatherService.getWeather(tempCountries[0]["capital"])
        .then(result => setWeatherInfo(result['current']))
    }
  }

  const showFunction = (country) => {
    setFilter(country)
  }

  return (
    <div>
      <Filter filter={filter} update={updateFilter} />
      <Countries
        countries={countries.filter(country =>
          country["name"]["common"].toLowerCase().includes(filter))}
        weather={weatherInfo}
        showFunction={showFunction} />
    </div>
  )
}

export default App;
