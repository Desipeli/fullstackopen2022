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

export default Course