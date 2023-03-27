import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Error from './pages/Error'
import Navbar from './Navbar'
import './App.css'

export const AppContext = createContext()

function App() {

  const [username, setUserName] = useState('ejmorian')

  return (
    <div>
      <AppContext.Provider value={{ username, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>

  )
}

export default App
