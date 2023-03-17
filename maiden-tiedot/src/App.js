import Filter from './Components/Filter.js'
import Countries from './Components/Countries.js'
import countryService from './Services/countries.js'
import { useState, useEffect } from 'react'


function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService.getInfo().then(info => {
      setCountries(info)
    })
  }, [])

  const updateFilter = (event) => {
    setFilter(event.target.value)
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
        showFunction={showFunction} />
    </div>
  )
}

export default App;
