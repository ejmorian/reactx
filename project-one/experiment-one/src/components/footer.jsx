import { useState } from "react"

export default function Footer(props) {


    const [input, setInput] = useState('')
    const [list, setlist] = useState([])

    const updateText = (event) => {
        setInput(event.target.value)

    }
    const updateList = (event) => {
        const addTask = [...list, input];
        setlist(addTask);


    }




    return (
        <div>
            <ul>
                {list.map((task, key) => <li key={key}>{task}</li>)}
            </ul>
            <input type="text" placeholder="Enter Task" onChange={updateText} />
            <button onClick={updateList}>Enter</button>


        </div>
    )

}