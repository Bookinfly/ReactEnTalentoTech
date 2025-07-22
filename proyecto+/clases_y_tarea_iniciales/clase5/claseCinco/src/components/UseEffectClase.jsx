import React from "react"
import { useEffect } from "react"
import { useState } from "react"

const UseEffectClase = ()=>{

  const  [estado, setEstado] = useState("Original")

  const cambiar = ()=> {
    setEstado("Modificado")
  }

   // useEffect se ejecuta al montar el componente y al desmontarlo
  useEffect(() => {
    console.log("Componente montado");

    return () => {
      console.log("Componente desmontado");
      // Aquí puedes agregar limpieza de efecto si es necesario
    };
  }, []); // [] indica que se ejecuta solo una vez al montar

  return (
    <div>
      <h2>Estados del useEffect</h2>
      <h3>{estado}</h3>
      <button onClick={ cambiar }> Cambiar estado </button>
    </div>
  )
}

export default UseEffectClase