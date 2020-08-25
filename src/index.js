import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  const { good, neutral, bad } = props.value
  const vastauksia = good + neutral + bad;
  if(props.text==="good") {
    return (
      <div>Hyviä palautteita <b>{good}</b></div>      
    )
  }
  if(props.text==="neutral") {
    return (
      <div>Neutraaleja palautteita <b>{neutral}</b></div>      
    )
  }
  if(props.text==="bad") {
    return (
      <div>Huonoja palautteita <b>{bad}</b></div>      
    )
  }
  if(props.text==="total") {
    return (
      <div>Palautteita yhteensä <b>{vastauksia}</b></div>      
    )
  }
  if(props.text==="average") {
    return (
      <div>Keskiarvo <b>{((good * 1) + (bad * -1))/vastauksia }</b></div>      
    )
  }
  if(props.text==="positive") {
    return (
      <div>Positiivisia palautteita <b>{ (good / vastauksia) * 100 }%</b></div>      
    )
  }
  return (
    <div></div>
  )

}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const vastauksia = good + neutral + bad;

  if (vastauksia>0) {
    return (
      <div>
      <h3>Tilastot</h3>
      <StatisticsLine text="good" value={props} />
      <StatisticsLine text="neutral" value={props} />
      <StatisticsLine text="bad" value={props} />
      <StatisticsLine text="total" value={props} />
      <StatisticsLine text="average" value={props} />
      <StatisticsLine text="positive" value={props} />
      </div>
    )
  }

  return (
    <div><h3>Ei vastauksia</h3></div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (

    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="HYVÄ" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="NEUTRAALI" />
      <Button handleClick={() => setBad(bad + 1)} text="HUONO" />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
