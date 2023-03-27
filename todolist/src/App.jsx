import { useState } from 'react'
import './App.css'
import Task from './task'

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => setList([...list, { id: list.length === 0 ? 1 : list[list.length - 1].id + 1, name: input, complete: false }])
  const deleteTask = (id) => setList(list.filter((item) => item.id !== id))
  const checkTask = (id, done) => setList(list.map(item => item.id === id ? { ...item, complete: !done } : item))

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' placeholder='Enter Task' id='todolist' name='task' onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ol>
        {list.map((task) => <Task key={task.id} id={task.id} task={task.name} delete={deleteTask} check={checkTask} complete={task.complete} />)}
      </ol>
    </div>
  )
}

export default App
