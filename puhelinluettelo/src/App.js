import { useState, useEffect } from 'react'
import personService from './services/persons.js'
import Persons from './Components/Persons.js'
import PersonForm from './Components/PersonForm.js'
import Filter from './Components/Filter.js'
import Error from './Components/Error.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorStyle, setErrorStyle] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(persons => setPersons(persons))
  }, [])

  const updateError = (style, message, timeout) => {
    setErrorStyle(style)
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), timeout)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      const confirmed = window.confirm(`${newName} is already added to phonebook. \nDo you wish to replace the number with a new one?`)
      const person = persons.find(p => p.name === newName)
      if (confirmed) {
        personService
          .putPerson({ ...person, number: newNumber }, person.id)
          .then(person => setPersons(persons.filter(p => p.id !== person.id).concat(person)))
        updateError('success', `${newName}'s number to the changed succesfully.`, 3000)
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      personService
        .addPerson(newPerson)
        .then(person => {
          updateError('success', `Person ${newName} added to the phonebook.`, 3000)
          setPersons(persons.concat(person))
        })
        .catch(error => updateError('error', error.response.data.error, 3000))
    }
    setNewName('')
    setNewNumber('')
  }

  const updateName = (event) => setNewName(event.target.value)

  const updateNumber = (event) => setNewNumber(event.target.value)

  const updateFilter = (event) => setNewFilter(event.target.value)

  const deletePerson = (id) => {
    const deletedPerson = persons.find(person => person.id === id)
    const confirmed = window.confirm(`Are you sure you want to delete ${deletedPerson.name}`)
    if (confirmed) {
      personService
        .deletePerson(id)
        .then(person => {
          setPersons(persons.filter(p => p.id !== id))
          //Set up success message
          setErrorStyle('success')
          setErrorMessage(`Deleted ${deletedPerson.name} succesfully.`)

        })
        .catch(error => {
          //Set up error message
          setErrorStyle('error')
          setErrorMessage(`Person '${deletedPerson.name}' was already removed from server.`)
        })
      setTimeout(() => setErrorMessage(null), 3000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Error message={errorMessage} errorStyle={errorStyle} />
      <Filter filter={newFilter} update={updateFilter} />

      <h2>Add a new</h2>
      <PersonForm name={newName} number={newNumber}
        updateName={updateName} updateNumber={updateNumber}
        addPerson={addPerson} />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} deletePerson={deletePerson} />
    </div>
  )

}

export default App