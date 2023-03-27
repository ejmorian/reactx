import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [fact, setFact] = useState('');
  const [next, setNext] = useState(false);

  useEffect(() => {
    fetch("https://catfact.ninja/fact").then(response => response.json()).then(data => setFact(data.fact))
  }, [next])

  return (
    <div>
      <h2>{fact}</h2>
      <h3>Random Cat Facts</h3>
      <button onClick={() => !next ? setNext(true) : setNext(false)}>Click Me</button>
      {next}
    </div>


  )
}

export default App
