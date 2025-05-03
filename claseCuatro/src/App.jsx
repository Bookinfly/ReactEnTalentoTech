import React, { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Contador from './components/Contador'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Boton />
      <Contador />
      <Formulario />
    </>
  )
}

export default App
