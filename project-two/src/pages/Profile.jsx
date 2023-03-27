import ChangeUser from "../components/ChangeUser"
import { useContext } from "react"
import { AppContext } from "../App"

export default function Profile(props) {

    const { username } = useContext(AppContext)
    return (
        <div>
            <h1>Profile</h1>
            <h2>{username}</h2>
            <ChangeUser />
        </div>
    )
}