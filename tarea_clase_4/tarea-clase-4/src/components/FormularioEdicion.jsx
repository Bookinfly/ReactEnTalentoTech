import React, { useState, useContext } from 'react'

import { ProductsContext } from './context/ProductsCRUDContext'//Contexto de productos en local con el CRUD (realmente no tiene el Read lo consume del contexto del carrito)

/**Componente del formulario de modificación, eliminación y carga backoffice
 * 
 * @param {* un objeto que representa un producto, un string para conocer el modo, una función de cerrar} param0 
 * @returns un formulario adaptable según el modo
 */
function FormularioProducto({ productoInicial = {}, modo = 'agregar', onCerrar , actualizarCard} ) {
  //crea un estado de producto, establece un formato y le adiciona productoInicial
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    departament: "",
    image: "",
    ...productoInicial // Spread para asegurar todas las claves
  })
  /**producto es  productoInicial{} más un formateo sí le falta alguna propiedad al {} o está vacio */

  const { agregarProducto, editarProducto } = useContext(ProductsContext)//del contexto ProductsContext nos traemos algunas funciones del cRUD

  const handleChange = (e) => {//función que toma un evento, usa el name del input y su valor para luego setear producto con esa actualización
    const { name, value } = e.target
    setProducto({ ...producto, [name]:value})
  }

  const [errores, setErrores] = useState({})//estado para almacenar errores actualizados

  
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
    return Object.keys(nuevosErrores).length === 0//retorna true si nuevosErrores está vacio
  }

  const handleSubmit = (e) => {

    e.preventDefault()//previene el submit por defecto
    if (validarFormulario()) {//si devuelve true
      if (modo === 'agregar') {//distingue por modo
        agregarProducto({ ...producto})//función que actualiza el contexto y la BD
        setProducto(//intentamos limpiar el form (creo que da problemas)
        { name: "",
          price:"",
          description:"",
          departament:"",
          image:""
        }
      )
      } else {//de no ser modo agregar asume que es edtar
        editarProducto(producto)//actualiza tanto contexto como BD
        actualizarCard(producto)
      }
      onCerrar()//esa función que debería cerrar un modal o algo que nos trajimos
      setErrores({})//limpia errores

      //problema para mostrar el producto actualizado
    }
  }

  return (
    <form onSubmit={handleSubmit}>{/**aqui usamos el evento que maneja el formulario*/}
      <h2>{modo === 'agregar' ? 'Agregar' : 'Actualizar'}</h2>{/**condiciona texto del h2 */}
      <fieldset>
        <legend>Datos del producto</legend>

        <label htmlFor="name">Nombre del Producto: {/**inicializa con una propiedad de producto{} */}
          {/**handleChalge es el actualizador */}
          <input 
          type="text"
          name="name" 
          value={producto.name} 
          onChange={handleChange} 
          placeholder="Leche larga vida La Serenisima 1L"/>
        </label>
        {errores.name && <p style={{ color: 'red' }}>{errores.name}</p>}{/**si la propiedad de errores es true renderiza el error */}

        <label htmlFor="price">Precio: {/**inicializa con una propiedad de producto{} */}
          <input 
            type="number" 
            name="price" 
            id="price" 
            value={producto.price} 
            onChange={handleChange} 
            placeholder="3000" 
            min={0}/>
        </label>
        {errores.price && <p style={{ color: 'red' }}>{errores.price}</p>}{/**si la propiedad de errores es true renderiza el error */}

        <label htmlFor="description">Descripción: {/**inicializa con una propiedad de producto{} */}
          <textarea 
            name="description" 
            id="description" 
            value={producto.description} 
            onChange={handleChange} 
            placeholder="Cartón de leche de 1L...">
          </textarea>
        </label>
        {errores.description && <p style={{ color: 'red' }}>{errores.description}</p>}{/**si la propiedad de errores es true renderiza el error */}

        <label htmlFor="departament">Departamento: {/**inicializa con una propiedad de producto{} */}
          <input 
            type="text" 
            name="departament" 
            id="departament" 
            value={producto.departament} 
            onChange={handleChange}
            placeholder="almacén"/>
        </label>
        {errores.departament && <p style={{ color: 'red' }}>{errores.departament}</p>}{/**si la propiedad de errores es true renderiza el error */}

        <label htmlFor="image">Imagen: {/**inicializa con una propiedad de producto{} */} 
          <input 
            type="url" 
            name="image"
            id="image"
            value={producto.image} 
            onChange={handleChange} 
            placeholder="www.imagenesbonitas.c..."
          />
        </label>
        {errores.image && <p style={{ color: 'red' }}>{errores.image}</p>}{/**si la propiedad de errores es true renderiza el error */}

      </fieldset>

      <button type='submit'>{modo === 'agregar' ? 'Agregar' : 'Actualizar'}</button>{/**condiciona texto del boton */}
    </form>
  )
}

export default FormularioProducto