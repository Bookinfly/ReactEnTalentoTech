import { useState } from 'react'
import './App.css';
import Bienvenida from './components/bienvenida';
import { Boton } from './components/Boton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bienvenida/>
      <Boton/>
    </>
  )
}

export default App
