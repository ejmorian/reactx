import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const updateInput = (e) => {
    setInput(e.target.value);

  }

  const addTask = () => {
    const task = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: input
    }

    setList([...list, task])
    console.log(list)
  }

  const deleteTask = (id) => setList(list.filter((item) => item.id !== id))

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' placeholder='Enter Task' id='todolist' name='task' onChange={updateInput} />
      <button onClick={addTask}>Add</button>
      <ol>
        {list.map((task) => <li onClick={() => { deleteTask(task.id) }} key={task.id}>{task.name}</li>)}
      </ol>

    </div>
  )
}

export default App
