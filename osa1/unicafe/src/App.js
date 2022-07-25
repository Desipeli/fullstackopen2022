import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }
  
  const addNeutral = () => {
    setNeutral(neutral + 1)
  }
  
  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading value='give feedback'/>
      <Button handler={addGood} text='good'/>
      <Button handler={addNeutral} text='neutral'/>
      <Button handler={addBad} text='bad'/>
      <Heading value='statistics'/>
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Heading = (props) => {
  return (
    <p><h1>{props.value}</h1></p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handler}>{props.text}</button>
  )
}

const Stats = (props) => {
  return (
    <div>
      good {props.good}
      <br/>
      neutral {props.neutral}
      <br/>
      bad {props.bad}
    </div>
  )
}

export default App
