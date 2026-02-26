import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
