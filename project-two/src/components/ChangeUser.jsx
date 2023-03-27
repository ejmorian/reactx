import { useState, useContext } from "react"
import { AppContext } from "../App"

export default function ChangeUser(props) {

    const { setUserName } = useContext(AppContext)

    const [input, setInput] = useState('')
    return (
        <div>
            <input type='text' placeholder="Enter new username..." onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => setUserName(input)}>Change</button>
        </div>
    )
}