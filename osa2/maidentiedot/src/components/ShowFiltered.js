import DisplayCountry from './DisplayCountry'

const ShowFiltered = ({ countries, filterText}) => {

    const filtered = countries.filter(country => 
      country.name.common.toLowerCase().includes(filterText.toLowerCase()))
  
    return (
    <div>
      <DisplayConditions filtered={filtered}/>
    </div>
    )
  }

const DisplayConditions = ({ filtered }) => {

  if (filtered.length > 10) {
    return (
      <p>
        Too many matches, specify another filter
      </p>
    )
  } else if (filtered.length > 1) {
    return (
      <>
        {filtered.map((country, i) => <p key={country.name.common}>{country.name.common}</p>)}
        </>
      )
  } else if (filtered.length === 1) {
    return (
      <>
        <DisplayCountry country={filtered[0]}/>
      </>
    )
  } else {
    return (
      <>
      <p>No matches, specify another filter</p>
      </>
    )
  }

  
}

export default ShowFiltered