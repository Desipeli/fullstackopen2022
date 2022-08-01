import { useState } from 'react'
import AddForm from './components/AddForm'
import ShowPersons from './components/ShowPersons'
import Filter from './components/Filter'

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