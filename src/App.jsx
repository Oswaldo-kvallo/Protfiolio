import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default App
