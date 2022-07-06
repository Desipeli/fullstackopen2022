const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <h1><Header header={course}/></h1>
      <Content part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </>
  )
}

const Header = (props) => {
  return (
  <>
    <h1>{props.header}</h1>
  </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}
export default App