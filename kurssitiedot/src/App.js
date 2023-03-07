
const Course = ({ course }) => {
  return (
    <div>
      <Header header={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

const Header = ({ header }) => { return (<h1>{header}</h1>) }

const Content = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)
  const sum = exercises.reduce((a, b) => a + b, 0)

  return (
    <div>
      {parts.map((part, i) => <Part key={i} name={part.name} amount={part.exercises} />)}
      <b>Total exercises: {sum}</b>
    </div>
  )
}

const Part = ({ name, amount }) => {
  return (<p>{name} {amount}</p>)
}

const App = () => {
  const courses = [
    {
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map((course, i) => <Course key={i} course={course} />)}
    </div>
  )
}

export default App