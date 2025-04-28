import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header'
import { Nav } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState("Inicio")
  const usuario = "Pocho Perez"
  const tipo = "Admin"
  const navItems = ["Inicio", "Galeria", "Contacto"]
  const imagenes = ["https://picsum.photos/200/300?random=1", "https://picsum.photos/200/300?random=2", "https://picsum.photos/200/300?random=3"]

  const renderContenido = ()=>{
    switch(seccion){
      case "Inicio":
        return <div>1</div>
      case "Contact":
        return <div>2</div>
      case "Galeria":
        return <div>3</div>
      default:
        return <div>4</div>
    }
  }


  return (
    <div className='d-flex flex-column min-vh-100'>
    <Header tipo={tipo} usuario={usuario} />
    <Nav items={newItems} OnSeccion />
    <main className='flex-grow-1 p-3'>
      {renderContenido()}
    </main>
  </div>
  )
}

export default App
