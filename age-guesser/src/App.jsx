import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [age, setAge] = useState(null)

  const guessAge = () => {
    fetch(`https://api.agify.io/?name=${input}`).then(response => response.json()).then(data => setAge(data))
  }

  return (
    <div>
      <h1>{age?.age}</h1>
      <span>Name : </span>
      <input placeholder="Ex... John Doe" type='text' onChange={(e) => setInput(e.target.value)} />
      <button onClick={guessAge}>Guess Your Age</button>

    </div>
  )
}

export default App
