import './app.css'
import { useState } from 'react'

//We are now learning useState
// useState is an object/hook that returns 2 values, a currentstate, and a function to update a state normally prefixed with `set`. 
// useState('initial value', it also takes in the initial value of the state as a parameter)
// the function value that is returned is the function that rerenders the component in real time whenever it is called, ie when the current value is changed.



function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
    console.log('click')
  }
  const decrement = () => {
    setCount(count - 1)
    console.log('click')
  }

  const [inputValue, setInputValue] = useState("")

  const mirror = (event) => {
    setInputValue(event.target.value)

  }

  const [textColor, setTextColor] = useState("yellow")

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='text' onChange={mirror} />
      <p>{inputValue}</p>

      <button onClick={() => textColor == "yellow" ? setTextColor("black") : setTextColor("yellow")}>Show/Hide</button>
      <h1 style={{ color: textColor }}>"Click to hide"</h1>
    </div>
  )
}



export default App
