import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const updateInput = (e) => {
    setInput(e.target.value);

  }
  const addTask = () => {
    const task = { id: list.length === 0 ? 1 : list[list.length - 1].id + 1, name: input, complete: false }
    setList([...list, task])
  }

  const deleteTask = (id) => setList(list.filter((item) => item.id !== id))

  const checkTask = (id, done) => {

    const update = list.map(item => {
      if (item.id === id) {
        return { ...item, complete: !done }
      }
      return item;
    })
    setList(update)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input type='text' placeholder='Enter Task' id='todolist' name='task' onChange={updateInput} />
      <button onClick={addTask}>Add</button>
      <ol>
        {list.map((task) => {
          return (
            <div>
              <li onClick={() => checkTask(task.id, task.complete)} style={{ color: task.complete ? 'green' : 'black' }} key={task.id}>{task.name} </li>
              <button onClick={() => { deleteTask(task.id) }} style={{ marginLeft: '20px' }}>x</button>

            </div>
          )
        })}
      </ol>

    </div>
  )
}

export default App
