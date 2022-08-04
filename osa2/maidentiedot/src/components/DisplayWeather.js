import { useState, useEffect } from 'react'
import axios from "axios"
import WEATHER from '../env'

const DisplayWeather = ({capital}) => {

    const city = "london"

    const [temp, setTemp] = useState("waiting for data...")
    const [wind, setWind] = useState("Waiting for data...")
    const [weatherDescription, setWeatherDescription] = useState("Waiting for data...")

    const weatherIcons = {
        "clear": " http://openweathermap.org/img/wn/01d@2x.png",
        "clouds": " http://openweathermap.org/img/wn/03d@2x.png",
        "rain": " http://openweathermap.org/img/wn/10d@2x.png",
        "thunderstorm": "http://openweathermap.org/img/wn/11d@2x.png",
        "snow": "http://openweathermap.org/img/wn/13d@2x.png",
        "drizzle": "http://openweathermap.org/img/wn/09d@2x.png",
        "mist": "http://openweathermap.org/img/wn/50d@2x.png",
    }

    const getCityWeather = () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${WEATHER}`
          axios
            .get(url)
            .then(response => {
              console.log(response.data)
              const weather = response.data
                setTemp(weather.main.temp)
                setWind(weather.wind.speed)
                setWeatherDescription(weather.weather[0].main.toLowerCase())
                
            })
      }
      useEffect(getCityWeather, [])

    return (
        <div>
            <h1>{`Weather in ${capital}`}</h1>
            <p>temperature {temp - 273.15} Celsius</p>
            <img src={weatherIcons[weatherDescription]} style={{background: "gray"}}/>
            <p>wind {wind} m/s</p>
        </div>
    )
}

export default DisplayWeather