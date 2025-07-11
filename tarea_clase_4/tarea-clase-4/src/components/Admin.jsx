import React from "react"
import CrearProducto from "./CrearProducto"

const Admin = ()=> {
  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://682966586075e87073a662a1.mockapi.io/productos/catalog', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(producto),

      })

      if (!respuesta.ok) {
        throw new Error('Error al agregar el producto')
      }

    const data = await respuesta.json()

    console.log('Producto agregado: ', data)

    alert('Producto agregado correctamente')
    } catch (error) {

      console.log(error.message)
      alert('Hubo un error al agregar el producto.')
    }
  }

  return (
    <div > 
      <h1>Gestión de productos</h1>
      <CrearProducto onAgregar={agregarProducto}/>
    </div>)
  
  }


export default Admin