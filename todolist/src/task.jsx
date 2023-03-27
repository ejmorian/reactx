export default function Task(props) {
    return (
        <div>
            <li onClick={() => props.check(props.id, props.complete)} style={{ color: props.complete ? 'green' : 'black' }} >{props.task} </li>

            <button onClick={() => props.delete(props.id)} style={{ marginLeft: '20px' }}>x</button>
        </div>
    )
}