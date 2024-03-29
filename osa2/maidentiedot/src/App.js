import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowFiltered from './components/ShowFiltered'

import WEATHER from './env.js'

const App = () => {




  const [filterText, setFilterText] = useState('')
  const [countries, setCountries] = useState([])

  const getCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(getCountries, [])


  const filterHandler = (event) => {
    setFilterText(event.target.value)
  }

  return (
    <div>
      <Filter filterHandler={filterHandler} filterText={filterText}/>
      <ShowFiltered filterText={filterText} countries={countries} setFilterText={setFilterText} />
    </div>
  );
}

export default App;
