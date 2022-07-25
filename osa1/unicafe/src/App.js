import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGood = () => {
    setAll(all + 1)
    setGood(good + 1)
  }
  
  const addNeutral = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }
  
  const addBad = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Heading value='give feedback'/>
      <Button handler={addGood} text='good'/>
      <Button handler={addNeutral} text='neutral'/>
      <Button handler={addBad} text='bad'/>
      <Heading value='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
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

const Statistics = (props) => {
  if (props.all === 0) {
    return <div> No feedback given </div>
  }
  return (
    <div>
      good {props.good} <br/>
      neutral {props.neutral} <br/>
      bad {props.bad} <br/>
      all {props.all} <br/>
      average {(props.good - props.bad) / props.all} <br/>
      positive {(props.good / props.all) *100} %
    </div>
  )
}

export default App
