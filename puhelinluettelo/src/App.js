import { useState, useEffect } from 'react'
import personService from './services/persons.js'

const Filter = ({ filter, update }) => {
  return (
    <form>
      <div>Filter shown with: <input value={filter} onChange={update} /></div>
    </form>
  )
}

const PersonForm = ({ name, number, updateName, updateNumber, addPerson }) => {
  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={name} onChange={updateName} /></div>
      <div>number: <input value={number} onChange={updateNumber} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, newFilter }) => {
  return (
    <div>
      {
        persons.filter(person =>
          person.name.toLowerCase()
            .includes(newFilter.toLowerCase())).map(person =>
              <p key={person.name}>{person.name} {person.number}</p>
            )
      }
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(persons => setPersons(persons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName))
      alert(`${newName} is already added to phonebook`)
    else {
      const newPerson = { name: newName, number: newNumber }
      personService
        .addPerson(newPerson)
        .then(person => setPersons(persons.concat(person)))
    }

    setNewName('')
    setNewNumber('')
  }

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  const updateNumber = (event) => setNewNumber(event.target.value)

  const updateFilter = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={newFilter} update={updateFilter} />

      <h2>Add a new</h2>
      <PersonForm name={newName} number={newNumber}
        updateName={updateName} updateNumber={updateNumber}
        addPerson={addPerson} />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )

}

export default App