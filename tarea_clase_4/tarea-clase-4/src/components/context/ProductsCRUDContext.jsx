import React, { createContext, useState } from "react"
import { useCart } from "./CartContext"

export const ProductsContext = createContext()

export const ProductsProvider = ( { children } ) => {

  const { cartData } = useCart();//lista original

  const [productos, setProductos] = useState(cartData.listOfItems || [])

  const agregarProducto = (nuevoProducto) => {

    setProductos([...productos, nuevoProducto])

  }

  const editarProducto = (productoActualizado) => {
    
    setProductos(
      productos.map((producto) => 
        producto.id === productoActualizado.id ? productoActualizado : producto)
    )
  }

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id))
  }

  return (
    <ProductsContext.Provider
      value= {{ productos, agregarProducto, editarProducto, eliminarProducto }}>
        { children }
    </ProductsContext.Provider>
  )
}
