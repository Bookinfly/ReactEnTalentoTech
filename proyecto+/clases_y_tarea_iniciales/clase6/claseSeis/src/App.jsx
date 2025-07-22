import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Inicio from './components/Inicio'
import Productos from './components/Productos'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/Productos" element={<Productos />}/>
        </Routes>
      </div>
  )
}

export default App
