import React from 'react'

const Header = (props) => {
    return <h2>{props.course}</h2>
  }
  
  const Total = (props) => {
    const initialValue = 0;
    const number = props.parts.map(part => part.exercises)
    const sumWithInitial = number.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    return <b>total of {sumWithInitial} exercises</b>
  }
  
  
  const Content = (props) => {
    
    return (
            props.parts.map(part =>
              <li key={part.id}>{part.name} {part.exercises}</li>
            )
    )
  }

const Course = (props) => {

    return (
          props.courses.map(course =>
            <div key={course.id}> <Header course={course.name}/> <Content parts={course.parts}/> <Total parts={course.parts}/> </div>
          )
  )
  }

export default Course