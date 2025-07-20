import React, { createContext, useState } from "react"
import { useCart } from "./CartContext"

export const ProductsContext = createContext()

export function ProductsProvider ( { children } ) {


  const { cartData } = useCart();//lista original

  const [productos, setProductos] = useState(cartData.listOfItems)//elimino validación, no me sirve que la app corra si falla
  console.log("1 - variable productos" + productos)

  async function modificarBD ( productoParaBD, metodo, id = null) {
    if (id) productoParaBD.id = Number(id); // Convertir a número
    const idValido = Number.isInteger(id)&&id>0||id=== null? true : false
    const productoValido = typeof(productoParaBD) === 'object' && productoParaBD !== null? true : false
    const metodoValido = metodo === 'PUT' || metodo === 'DELETE' || metodo === 'POST'
    const valido = idValido && productoValido && metodoValido;
    console.log("2 - props de modificarBD" + productoParaBD + metodo + id)
    if (valido) {
      const url = "https://682966586075e87073a662a1.mockapi.io/productos/catalog"
      const urlFinal = id === null ? url : url + "/" + id 
      try {
        const respuesta = await fetch(urlFinal, {
          method: metodo,
          headers: { 'Content-Type': 'application/json' },
          body: metodo !== 'DELETE' ? JSON.stringify(productoParaBD) : undefined
        })
        console.log("3 -respuesta de la BD" + respuesta)

        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`)

        return metodo !== 'DELETE' ? await respuesta.json() : true

      } catch (error) {

        alert("hubo un error!!!")
        console.error(error)

      } finally {
        console.log("fetch concretado con éxito")
      } 
    }
  }

  const agregarProducto = async (nuevoProducto) => {//funciona
      console.log("4 - nuevoProducto")
      console.log(nuevoProducto)
      const resultado = await modificarBD(nuevoProducto, 'POST')
      console.log(resultado)
      setProductos(listaActual => [...listaActual, resultado])
  }

  const editarProducto = async (productoActualizado) => {
      console.log("5 productoActualizado")
      productoActualizado.id = Number(productoActualizado.id)
      console.log(typeof(productoActualizado.id))
      const resultado = await modificarBD(productoActualizado, 'PUT', productoActualizado.id)
      console.log(resultado)
      setProductos(listaActual => listaActual.map(productoDeLista => 
        productoDeLista.id === resultado.id ? resultado : productoDeLista 
      ))
  }

  const eliminarProducto = async (id) => {
    id = Number(id)
    await modificarBD({}, 'DELETE', id)//borra de la BD
    setProductos(listaActual => listaActual.filter(productoDeLista => Number(productoDeLista.id) !== id))//Borra del stage local
    //pero no se borra de la lista de admin que ya cargo
  }

  return (
    <ProductsContext.Provider
      value= {{ productos, agregarProducto, editarProducto, eliminarProducto }}>
        { children }
    </ProductsContext.Provider>
  )
}
