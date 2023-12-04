import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = (props) => {

  return(<text> {props.text} {props.value}<br /></text> )

}
const StatisticLines = (props) => {

  return(
  <div>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={props.good+props.neutral+props.bad} />
    <StatisticLine text="average" value ={(props.good+props.neutral-props.bad)/(props.good+props.neutral+props.bad)} />
    <StatisticLine text="positive" value ={props.good/(props.good+props.neutral+props.bad)*100 + '%'} />
  </div> )

}
const StatisticTable = (props) => {

  return(
  <div>
    <table>
  <tr>
    <td>good</td>
    <td>{props.good}</td>
  </tr>
  <tr>
    <td>neutral</td>
    <td>{props.neutral}</td>
  </tr>
  <tr>
    <td>bad</td>
    <td>{props.bad}</td> 
  </tr>
  <tr>
    <td>all</td>
    <td>{props.good+props.neutral+props.bad} </td>
  </tr>
  <tr>
    <td>average</td>
    <td>{(props.good+props.neutral-props.bad)/(props.good+props.neutral+props.bad)}</td>
  </tr>
  <tr>
    <td>positive</td>
    <td>{(props.good)/(props.good+props.neutral+props.bad)*100 + '%'}</td>
  </tr>
</table>
  </div> )

}

const Statistics = (props) => {
  if (props.good+props.neutral+props.bad>0) {
  return(
    <StatisticTable good={props.good} neutral={props.neutral} bad={props.bad} /> //use lines or table
  )
  }
  return(<div><text> No feedback given </text></div>)
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
    
  )
}

export default App