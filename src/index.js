import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button handleClick={() => setGood(good + 1)} text="HYVÄ" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="IHAN OK" />
      <Button handleClick={() => setBad(bad + 1)} text="HUONO" />
      <h3>Tilastot</h3>
      Hyviä palautteita <b>{good}</b><br/>
      Ihan ok palautteita <b>{neutral}</b><br/>
      Huonoja palautteita <b>{bad}</b><br/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
