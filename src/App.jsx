
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import './index.css'

import Navbar from './components/navbar.jsx'
function App() {
  const [search, setSearch] = useState('')
  

  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
