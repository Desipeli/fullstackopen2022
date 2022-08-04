import {useState} from 'react'

import DisplayCountry from './DisplayCountry'
import Button from "./Button"

const ShowFiltered = ({ countries, filterText, setFilterText }) => {

    let filtered = countries.filter(country => 
      country.name.common.toLowerCase().includes(filterText.toLowerCase()))

  
    return (
    <div>
      <DisplayConditions setFilterText={setFilterText} filtered={filtered}/>
    </div>
    )
  }

const DisplayConditions = ({ filtered, setFilterText }) => {

  const handleCountryButton = (country) => {
    setFilterText(country.name.common)
  }

  if (filtered.length > 10) {
    return (
      <p>
        Too many matches, specify another filter
      </p>
    )
  } else if (filtered.length > 1) {
    return (
      <>
        {filtered.map((country, i) => 
        <p key={country.name.common}>{country.name.common} 
        <Button handler={() => handleCountryButton(country)} text="show"/></p>
        )}
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