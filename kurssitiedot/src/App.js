
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
  return (
    <div>
      {parts.map((part, i) => <Part key={i} name={part.name} amount={part.exercises} />)}
    </div>
  )
}

const Part = ({ name, amount }) => {
  return (<p>{name} {amount}</p>)
}

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
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App