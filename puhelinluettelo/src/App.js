import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1231244' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName))
      alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat({ name: newName, number: newNumber }))

    setNewName('')
    setNewNumber('')
  }

  const updateName = (event) => setNewName(event.target.value)

  const updateNumber = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={updateName} /></div>
        <div>number: <input value={newNumber} onChange={updateNumber} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>
      )}
    </div>
  )

}

export default App