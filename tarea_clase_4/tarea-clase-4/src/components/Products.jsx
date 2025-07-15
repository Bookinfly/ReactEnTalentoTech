import React, { useState, useEffect } from "react"
import Cart from "./Cart"
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'



/**
 * 
 * @param {*listItems} param0 
 * es una lista de objetos
 * @returns 
 * un componente con una lista, un span con la cantidad de cada uno y botones para aumentar o disminuir esa cantidad
 */
const Products =  () => {
  const { cartData, setCartData } = useCart();


  const price = () => {
    let x = 0
    cartData.listOfItems.forEach((item, key) => {
      if (cartData.cantItems[key] > 0) {
        x += item.price * cartData.cantItems[key]
      }
    })
    const totalX = parseFloat(x.toFixed(2))
    if (cartData.total !== totalX) {
      let cartTemp = {...cartData}
      cartTemp.total = totalX
      setCartData(cartTemp)//seteo acumulador dentro de condicional
  }
}
  /**
   * 
   * @param {*} key  un número a utilizar para marcar la position
   *sin return, solo actualiza el useState
   */
  const suma = (key)=> {
    let tempCard = {...cartData}
    tempCard.cantItems[key] = tempCard.cantItems[key] + 1
    setCartData(tempCard)
  }

  const resta = (key)=> {
    let tempCard = {...cartData}
    if(tempCard.cantItems[key] > 0) {
      tempCard.cantItems[key] = tempCard.cantItems[key] - 1
      setCartData(tempCard)
    }
  }

  useEffect(() => {
    price()
}, [JSON.stringify(cartData.cantItems)]); // Usar JSON.stringify para la comparación


  return (<div className="main__section__products">
    {/** recorre la lista y en cada iteración crea un div */}
    <div className="main__section__products__list" >
      { cartData.listOfItems.map( (item, key)=>{
        return (
          <div key={key} className="main__section__products__list--card">
            <figure className="card__figure">
              <img src={item.image} alt={item.name} className="card__figure--img"/>
            </figure>
            <h3 className="card--name">{ `${item.name}` }</h3>
            <p className="card--des">{item.description}</p>
            <h4 className="card--price">${item.price}</h4>
            <Link to={`/detalle/${item.id}`} className="button-link"> Ver Detalle </Link>

            <div className="card__box">
            <button  onClick={ () => {resta(key)} } className="card__box--button2">-</button>
            <span className=" card__box--cant">{`Unidades ${cartData.cantItems[key]} `}</span>
            <span className=" card__box--precio">{`Total $${(cartData.cantItems[key]*item.price).toFixed(2)}`}</span>
            <button  onClick={ () => {suma(key)} } className="card__box--button1">+</button>
            </div>  
          </div>
        )
      })
    }
    </div>
    <div className="main__section__products__div" >
      <span className="main__section__products__div--price">Carrito por un todal de ${cartData.total.toFixed(2)}</span>
      <Link to={'/cart'} className="button-link main__section__products__div--link" > Ir al carrito </Link>    
    </div>

  </div>)
}

export default Products