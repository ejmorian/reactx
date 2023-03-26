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

  const deleteTask = (task) => {
    const updateList = list.filter((item) => item !== task)
    setList(updateList)

  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' placeholder='Enter Task' id='todolist' name='task' onChange={updateInput} />
      <button onClick={addTask}>Add</button>
      <ol>
        {list.map((task, key) => <li onClick={() => { deleteTask(task) }} key={key}>{task}</li>)}
      </ol>

    </div>
  )
}

export default App
