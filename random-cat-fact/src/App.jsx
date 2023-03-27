import { useState, useEffect } from 'react'
import './App.css'


function App() {

  const [fact, setFact] = useState('');

  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact").then(response => response.json()).then(data => setFact(data.fact))
  }

  useEffect(() => fetchCatFact(), [])

  return (
    <div>
      <h2>{fact}</h2>
      <h3>Random Cat Facts</h3>
      <button onClick={fetchCatFact}>Click Me</button>
    </div>
  )
}


export default App
