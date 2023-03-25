//props are like objects passed into a component, properties are declared when the component is invoked

export default function Users(user) {

    return (
        <div className="profile">
            <p >Name: {user.name}</p>
            <p >Age: {user.age}</p>
            <p >Gender: {user.gender}</p>
        </div>
    )
}
