import ChangeUser from "../components/ChangeUser"

export default function Profile(props) {
    return (
        <div>
            <h1>Profile</h1>
            <h2>{props.username}</h2>
            <ChangeUser setState={props.setUser} />
        </div>
    )
}