import { useState, useEffect } from 'react'
import axios from 'axios'
import AddForm from './components/AddForm'
import ShowPersons from './components/ShowPersons'
import Filter from './components/Filter'
import Numbers from './services/Numbers'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const [notification, setNotification] = useState(null)
  const [notificationType, setNotificationType] = useState('error')



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

        setNotification(`Added ${returnedPerson.name}`)
        setNotificationType('notification')
        notificationTimer()
        })
     }

  const replaceNumber = (person) => {
    Numbers
      .update(person.id, {...person, number : newNumber})
      .then( response => {
        setPersons(persons.map(p => p.id !== person.id ? p : response))
        setNotification(`Number of ${person.name} has been changed`)
        setNewName('')
        setNewNumber('')
        setNotificationType('notification')
        notificationTimer()
      })
      .catch(error => {
        removedAlreadyError(person)
      })
  }

  const deleteHandler = (id) => {
    Numbers
          .deleteNumber(id)
          .then(response => {
            setNotification(`Removed ${persons.find(p => p.id === id).name}`)
            setPersons(persons.filter(person => person.id !== id))
            setNotificationType('notification')
            notificationTimer()
          })
          .catch(error => {
            removedAlreadyError(persons.find(p => p.id === id))
          })
        }

  const removedAlreadyError = (person) => {
    setNotification(`${person.name} was already removed`)
    setNotificationType('error')
    notificationTimer()
    getNumbers()
  }

  const notificationTimer = (time = 2000) => setTimeout(() => {
    setNotification(null)
  }, time)

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
      <Notification message={notification} notificationClass={notificationType}/>
      <Filter filterText={filterText} filterHandler={filterHandler}/>
      <h2>add a new</h2>
      <AddForm newName={newName}
        handleNameFieldChange={handleNameFieldChange}
        newNumber={newNumber}
        handleNumberFieldChange={handleNumberFieldChange}
        addName={addName}
      />
      <ShowPersons deleteHandler={deleteHandler} setPersons={setPersons} persons={persons} filterText={filterText}/>
    </div>
  )
}

export default App