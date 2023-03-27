import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Error from './pages/Error'
import Navbar from './Navbar'
import './App.css'

function App() {

  const [username, setUserName] = useState('ejmorian')

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='' element={<Home username={username} />} />
          <Route path='/profile' element={<Profile username={username} setUser={setUserName} />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

    </div>

  )
}

export default App
