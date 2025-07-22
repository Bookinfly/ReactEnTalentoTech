import { useState } from 'react'
import './App.css';
import Bienvenida from './components/bienvenida';
import { Boton } from './components/Boton';
import { Ol } from './components/Ol';
import { Card } from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  const productos = ["naranja", "manzana", "personalbar", "mango"]
  let title = "Oferta Especial"
  let desc = "20% de descuento en todos los productos"

  return (
    <>
      <Bienvenida/>
      <Ol lista={productos}/>
      <Boton />
      <Card title={ title } description={ desc } colorBInfo={ "White" } borderInfo={ "Yellow 2px solid"} paddingInfo={ "30px"} colorInfo={ "Black "} marginInfo={ "20px "}/>
    </>
  )
}

export default App
