import Button from "./Button"
import Numbers from "../services/Numbers"
import Notification from "./Notification"

const ShowPersons = ({ persons, filterText, deleteHandler }) => {

    let numbersToShow = persons.filter(person => 
      person.name.toLowerCase().includes(filterText.toLowerCase()))

    
  
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