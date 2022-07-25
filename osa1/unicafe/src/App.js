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
    <h1>{props.value}</h1>
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
      
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
          <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.all}/>
          <StatisticLine text="average" value={(props.good - props.bad) / props.all}/>
          <StatisticLine text="positive" value={(props.good / props.all) *100 + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return  (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
    )
}

export default App
