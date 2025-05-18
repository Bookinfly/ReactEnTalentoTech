import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Productos() {

  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect( ()=>{

    fetch('https://682966586075e87073a662a1.mockapi.io/productos/electrodomesticos')
      .then((respuesta)=>respuesta.json())
      .then((datos)=>{
        setProductos(datos)
        setCargando(false)
      })
      .catch((error)=>{
        console.error('Error: ', error)
        setError('Problema con la carga de productos')
        setCargando(false)
      })
  },[])

  if (cargando) return <p style={{backgroundColor:'orange', fontWeight:'bold', color:'blue'}}>Cargando productos...🚛</p>
  if (error) return <p>{error}</p>

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {productos.map((producto)=>(
        <div key={producto.id}
          style={{
            border: "1px solid #ccc",
            padding: "16px",
            borderRadius: "8px",
            width: "250px",
            textAlign: "center",
          }}>
          <h2>{producto.name}</h2>
          <h4>{producto.product}</h4>
          <figure>
            <img src={producto.image} alt={producto.name} style={{maxWidth:'200px', maxHeight:'200px'}}/>
            <figcaption>{producto.description}</figcaption>
          </figure>
            <div>
              <span style={{ fontWeight: "bold", color: "#007bff" }}>{producto.price}</span>
            </div>
        </div>
      ))}
    </div>)


}

export default Productos