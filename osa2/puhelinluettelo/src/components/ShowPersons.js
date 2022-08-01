const ShowPersons = ({ persons, filterText}) => {

    const numbersToShow = persons.filter(person => 
      person.name.toLowerCase().includes(filterText.toLowerCase()))
  
    return (
    <div>
    <h2>Numbers</h2>
    {numbersToShow.map((person, i) => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
    )
  }

export default ShowPersons