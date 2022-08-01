import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const handleNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberFieldChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName)) {
      alert(` ${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const filterHandler = (event) => {
    setFilterText(event.target.value)

  }

  const numbersToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input 
        value={filterText}
        onChange={filterHandler}
      />
      <h2>add a new</h2>
      <form>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameFieldChange}
          />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={handleNumberFieldChange}
          />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {numbersToShow.map((person, i) => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )

}

export default App