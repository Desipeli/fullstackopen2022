import { useState, useEffect } from 'react'
import axios from 'axios'
import AddForm from './components/AddForm'
import ShowPersons from './components/ShowPersons'
import Filter from './components/Filter'
import Numbers from './services/Numbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')


  const getNumbers = () => {
    Numbers
      .getAll()
      .then(response => setPersons(response))
  }
  useEffect(getNumbers, [])

  const addName = (event) => {
    event.preventDefault()
     if (persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())) {
       if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        replaceNumber(persons.find(person => person.name.toLowerCase() === newName.toLowerCase()))
       }
       return
     }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    Numbers
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
     }

  const replaceNumber = (person) => {
    Numbers
      .update(person.id, {...person, number : newNumber})
      .then( response => {
        setPersons(persons.map(p => p.id !== person.id ? p : response))
      })
  }

  const filterHandler = (event) => {
    setFilterText(event.target.value)
  }

  const handleNameFieldChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberFieldChange = (event) => {
    setNewNumber(event.target.value)
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
      <ShowPersons setPersons={setPersons} persons={persons} filterText={filterText}/>
    </div>
  )
}

export default App