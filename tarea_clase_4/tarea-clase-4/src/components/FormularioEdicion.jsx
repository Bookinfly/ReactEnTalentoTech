import React, { useState, useContext } from 'react'

import { ProductsContext } from './context/ProductsCRUDContext'

function FormularioProducto({ productoInicial = {}, modo = 'agregar', onCerrar } ) {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    departament: "",
    image: "",
    ...productoInicial // Spread para asegurar todas las claves
  })

  const { agregarProducto, editarProducto } = useContext(ProductsContext)//no estan ni la lista productos, ni la función de eliminarProducto

  const handleChange = (e) => {

    const { name, value } = e.target
    setProducto({ ...producto, [name]:value})

  }

  const [errores, setErrores] = useState({})

  const validarFormulario = () => {
    const nuevosErrores = {}

    if (!producto.name.trim()) {
      nuevosErrores.name = 'El nombre es obligatorio'
    }
    if (!producto.price || Number(producto.price) <= 0) {
      nuevosErrores.price = 'El precio debe ser mayor a 0'
    }
    if (!producto.description.trim() || producto.description.length < 10) {
      nuevosErrores.description = 'La descripción debe tener almenos 10 caracteres.'
    }
    if (!producto.departament.trim()) {
      nuevosErrores.departament = 'El departamento es obligatorio'
    }
    if (!producto.image.trim()) {
      nuevosErrores.image = 'La url de la imagen es obligatoria'
    }
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    if (validarFormulario()) {
      if (modo === 'agregar') {
        agregarProducto({ ...producto})
      } else {
        editarProducto(producto)
      }
      onCerrar()

      setProducto(
        { name: "",
          price:"",
          description:"",
          departament:"",
          image:"" }
      )
      setErrores({})
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <fieldset>
        <legend>Datos del producto</legend>

        <label htmlFor="name">Nombre del Producto: 
          <input 
          type="text"
          name="name" 
          value={producto.name} 
          onChange={handleChange} 
          placeholder="Leche larga vida La Serenisima 1L"/>
        </label>
        {errores.name && <p style={{ color: 'red' }}>{errores.name}</p>}

        <label htmlFor="price">Precio: 
          <input 
            type="number" 
            name="price" 
            id="price" 
            value={producto.price} 
            onChange={handleChange} 
            placeholder="3000" 
            min={0}/>
        </label>
        {errores.price && <p style={{ color: 'red' }}>{errores.price}</p>}

        <label htmlFor="description">Descripción: 
          <textarea 
            name="description" 
            id="description" 
            value={producto.description} 
            onChange={handleChange} 
            placeholder="Cartón de leche de 1L...">
          </textarea>
        </label>
        {errores.description && <p style={{ color: 'red' }}>{errores.description}</p>}

        <label htmlFor="departament">Departamento: 
          <input 
            type="text" 
            name="departament" 
            id="departament" 
            value={producto.departament} 
            onChange={handleChange}
            placeholder="almacén"/>
        </label>
        {errores.departament && <p style={{ color: 'red' }}>{errores.departament}</p>}

        <label htmlFor="image">Imagen: 
          <input 
            type="url" 
            name="image"
            id="image"
            value={producto.image}
            onChange={handleChange}
            placeholder="www.imagenesbonitas.com/carton-de-leche"
          />
        </label>
        {errores.image && <p style={{ color: 'red' }}>{errores.image}</p>}

      </fieldset>

      <button type='submit'>{modo === 'agregar' ? 'Agregar' : 'Actualizar'}</button>
    </form>
  )
}

export default FormularioProducto