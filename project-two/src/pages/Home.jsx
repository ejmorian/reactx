import { useContext } from "react"
import { AppContext } from "../App"

export default function Home(props) {

    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>Home</h1>
            <h2>{username}</h2>
        </div>
    )
}