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

export default Course