import {useState, useEffect} from 'react'

import DisplayCountry from './DisplayCountry'
import Button from "./Button"
import DisplayWeather from './DisplayWeather'

const ShowFiltered = ({ countries, filterText, setFilterText }) => {

    const filtered = countries.filter(country => 
      country.name.common.toLowerCase().includes(filterText.toLowerCase()))

    // Tämän avulla löydetään myös maat, joidenka nimi on osa toisen maan nimeä
    let filtered2 = filtered
     Array.from(filtered).forEach(country => {
       if (country.name.common.toLowerCase() === filterText.toLowerCase()) {
         filtered2 = [country]
       }
     })
  
    return (
    <div>
      <DisplayConditions setFilterText={setFilterText} filtered={filtered2}/>
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
       <DisplayWeather capital={filtered[0].capital}/>
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