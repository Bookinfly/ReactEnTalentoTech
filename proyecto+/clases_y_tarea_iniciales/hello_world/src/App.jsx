import { useState } from 'react'
import './App.css'
import ComponenteH1 from './components/ComponenteH1'
import ComponenteConLista from './components/ComponenteConLista'
import BotonReutilizableClase2 from './components/BotonReutilizableClase2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponenteH1/>
      <ComponenteConLista />
      <>
      <BotonReutilizableClase2 texto="Aceptar" color="Green"/>
      <BotonReutilizableClase2 texto="Rechazar" color="Red"/>
      </>
    </>

  )
}

export default App
