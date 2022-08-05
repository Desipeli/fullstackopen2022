import Button from "./Button"
import Numbers from "../services/Numbers"

const ShowPersons = ({ persons, filterText, setPersons }) => {

    let numbersToShow = persons.filter(person => 
      person.name.toLowerCase().includes(filterText.toLowerCase()))

    const deleteHandler = (id) => {
      Numbers
        .getOne(id)
        .then(returnedPerson => {
          if (window.confirm(`Delete ${returnedPerson.name} ?`)) {
            Numbers
            .deleteNumber(id)
            .then(response => {
              setPersons(persons.filter(person => person.id !== id))
            })
          }
        })    
    }
  
    return (
    <div>
    <h2>Numbers</h2>
    {numbersToShow.map((person, i) => <p key={person.name}>
      {person.name} {person.number} 
      {<Button text="delete" handler={() => deleteHandler(person.id)}/>}
      </p>)}
    </div>
    )
  }

export default ShowPersons