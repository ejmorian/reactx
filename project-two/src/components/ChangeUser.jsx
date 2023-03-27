import { useState } from "react"

export default function ChangeUser(props) {

    const [input, setInput] = useState('')
    return (
        <div>
            <input type='text' placeholder="Enter new username..." onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => props.setState(input)}>Change</button>
        </div>
    )
}