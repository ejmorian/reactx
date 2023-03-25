import './app.css'
import Users from './User'
import Planets from './Planets'

//ternary operators are like if statement but a shorter way of it.
// (if this is true) ? (this place this) : (do this)
// ? stands for `then` and : stands for else
// one can also use the && if its only an if statement with no else.


function App() {
  const users = [
    {
      name: "Joy",
      age: '28',
      gender: 'female'
    },
    {
      name: "JM",
      age: '29',
      gender: 'male'
    },
    {
      name: "Luffy",
      age: '30',
      gender: 'male'
    },
    {
      name: "Nami",
      age: '24',
      gender: 'female'
    },
    {
      name: "Usopp",
      age: '27',
      gender: 'male'
    },
  ]

  const planets = [
    {
      name: "Mars",
      isGas: false
    },
    {
      name: "Earth",
      isGas: false
    },
    {
      name: "Jupiter",
      isGas: true
    },
    {
      name: "Venus",
      isGas: false
    },
    {
      name: "Neptune",
      isGas: true
    },
    {
      name: "Uranus",
      isGas: true
    },
  ]
  // display gas planets only
  // Use map() to display list, ternary operator to check if planet is gas or not
  return (
    <div>
      {users.map((user, key) => <Users key={key} name={user.name} age={user.age} gender={user.gender} />)}

      {planets.map((planet, key) => planet.isGas && <Planets key={key} name={planet.name} />)}

    </div>
  )
}



export default App
