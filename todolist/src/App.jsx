import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const updateInput = (e) => {
    setInput(e.target.value);

  }

  const addTask = () => {
    setList([...list, input])
  }

  const deleteTask = (key) => setList(list.filter((item, index) => index !== key))

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' placeholder='Enter Task' id='todolist' name='task' onChange={updateInput} />
      <button onClick={addTask}>Add</button>
      <ol>
        {list.map((task, key) => <li onClick={() => { deleteTask(key) }} key={key}>{task}</li>)}
      </ol>

    </div>
  )
}

export default App
