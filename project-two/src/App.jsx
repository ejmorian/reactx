import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Roadmap from './pages/Roadmap'
import Team from './pages/Team'
import Error from './pages/Error'
import Navbar from './Navbar'
import './App.css'

function App() {

  return (
    <div>
      <Router>

        <Navbar />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/roadmap' element={<Roadmap />} />
          <Route path='/team' element={<Team />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>

    </div>

  )
}

export default App
