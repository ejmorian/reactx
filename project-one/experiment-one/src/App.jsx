import './app.css'
import { useState } from 'react'
import Nav from './components/nav'
import Header from './components/header'

//We are now learning useState
// useState is an object/hook that returns 2 values, a currentstate, and a function to update a state normally prefixed with `set`. 
// useState('initial value', it also takes in the initial value of the state as a parameter)
// the function value that is returned is the function that rerenders the component in real time whenever it is called, ie when the current value is changed.



function App() {
  return (
    <div className='container'>
      <Nav menuOne="About" menuTwo="Projects" menuThree="Code" />
      <Header title="Hi, I am JMorian" subTitle="I am a Front-End Developer" />
    </div>
  )
}

export default App
