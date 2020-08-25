import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = ({ good, neutral, bad }) => {

  const vastauksia = good + neutral + bad;

  if (vastauksia>0) {
    return (
      <div>
      <h3>Tilastot</h3>
      Hyviä palautteita <b>{good}</b><br/>
      Neutraaleja palautteita <b>{neutral}</b><br/>
      Huonoja palautteita <b>{bad}</b><br/>
      Palautteita yhteensä <b>{vastauksia}</b><br/>
      Keskiarvo <b>{((good * 1) + (bad * -1))/vastauksia }</b><br/>
      Positiivia palautteita <b>{ (good / vastauksia) * 100 }%</b><br/>
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
