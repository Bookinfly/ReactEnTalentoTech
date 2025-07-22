import React from "react"

function Boton() {

  function manejarClick() {
    alert("Click")
  }

  return <button onClick={manejarClick}>Hacer click</button>
}

export default Boton