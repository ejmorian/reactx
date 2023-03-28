import './App.css'
import Navigation from './Navigation'
import About from './pages/About'
import Projects from './pages/Projects'
import Code from './pages/Code'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< About />} />
          <Route path='/projects' element={< Projects />} />
          <Route path='/code' element={<Code />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Navigation />
      </Router>
    </div>

  )
}

export default App
