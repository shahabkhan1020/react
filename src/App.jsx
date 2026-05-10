import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contect from './Components/Contect'

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contect' element={<Contect />} />
    </Routes>
    
    
    
    </>
  )
}

export default App
