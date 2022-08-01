const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => 
        <Part key={part.id} part={part}/>
      )}
      <p><b>total of {total} exercises</b></p>
    </div>
  )
}

const Part = ({ part }) => {
  return (
  <p>
    {part.name} {part.exercises}
  </p>
)}

export default App