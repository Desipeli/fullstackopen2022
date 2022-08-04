import { useState, useEffect } from 'react'
import axios from 'axios'
import AddForm from './components/AddForm'
import ShowPersons from './components/ShowPersons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const getNumbers = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(getNumbers, [])

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

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} filterHandler={filterHandler}/>
      <h2>add a new</h2>
      <AddForm newName={newName}
        handleNameFieldChange={handleNameFieldChange}
        newNumber={newNumber}
        handleNumberFieldChange={handleNumberFieldChange}
        addName={addName}
      />
      <ShowPersons persons={persons} filterText={filterText}/>
    </div>
  )
}

export default App