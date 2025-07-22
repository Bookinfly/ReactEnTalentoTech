// import { useState } from 'react'
import React from "react";
import './App.css'
import Team from "./components/Team";
import ProyectCard from "./components/ProyectCard";
import InterestGallery from "./components/InterestGallert";

const team = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://thumbs.dreamstime.com/z/elegant-business-woman-black-dress-showing-isolated-vector-illustration-elegant-business-woman-showing-142349314.jpg?ct=jpeg' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://thumbs.dreamstime.com/z/welcoming-cartoon-character-open-arms-vibrant-cartoon-character-features-open-arms-welcoming-gesture-embodying-joy-343428452.jpg?ct=jpeg' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://thumbs.dreamstime.com/z/happy-cartoon-character-giving-thumbs-up-sign-cheerful-cartoon-character-big-smile-both-thumbs-up-showcasing-343428401.jpg?ct=jpeg' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://thumbs.dreamstime.com/z/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-198108203.jpg?ct=jpeg' },
]

const nameProyect = "Plataforma de Gestión"
const description = "Una herramienta para optimizar la gestión de equipos."
const textButton = "Explorar proyecto"

const interest = ['React', 'JavaScript', 'APIs', 'Diseño UX', 'Node.js']

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <ProyectCard nameProyect={ nameProyect } description={ description } textButton={ textButton }/>
      <Team staff={ team } />
      <InterestGallery interest={interest}/>
    </div>
  )
}

export default App
