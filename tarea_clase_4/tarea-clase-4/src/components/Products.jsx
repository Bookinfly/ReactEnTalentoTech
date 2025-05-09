import React, { useState, useEffect } from "react"
import Cart from "./Cart"


/**
 * 
 * @param {*listItems} param0 
 * es una lista de objetos
 * @returns 
 * un componente con una lista, un span con la cantidad de cada uno y botones para aumentar o disminuir esa cantidad
 */
const Products =  ({listItems}) => {
  //useState con una lista de igual longitud a la pasada como argumento, rellena con 0 en cada posición

  let [cant, setCant] = useState(listItems.map(()=>0))

  let [acu, setAcu] = useState(0)

  let [displayBoxes, setDisplayBoxes] = useState({display:"block"})

  const price = () => {
    setAcu(0)
    let x = 0
    listItems.forEach((item, key)=>{
      if(cant[key] > 0){
        x += item.precio * cant[key]
      }
    })
    console.log(parseFloat(x.toFixed(2)))
    setAcu(x)
  }

  /**
   * 
   * @param {*} key  un número a utilizar para marcar la position
   *sin return, solo actualiza el useState
   */
  const suma = (key)=> {
    let newArray = [...cant]
    newArray[key] = newArray[key] + 1
    setCant(newArray)
    price()
  }

  const resta = (key)=> {
    let newArray = [...cant]
    if(newArray[key] > 0) {
        newArray[key] -= 1
        setCant(newArray)
    }
    price()
  }

  useEffect(() => {
    price();
  }, [cant]);


  return <div>
    {/** recorre la lista y en cada iteración crea un li */}
    <ul className="cart" style={displayBoxes}>
      { listItems.map( (item, key)=>{
        return (
          <li key={key}>
            <span >{ `${item.producto} :$${item.precio}` }</span>
            <button  onClick={ () => {suma(key)} }>+</button>
            <button  onClick={ () => {resta(key)} }>-</button>
            <span className="cant">{`Unidades ${cant[key]} `}</span>
            <span className="precio">{`Costo total $${(cant[key]*item.precio).toFixed(2)}`}</span>
          </li>
        )
      })
    }
    </ul>
    <div className="cart" style={displayBoxes}>
      {acu}
    </div>
    <Cart listOfItems={listItems} cantItems={cant} total={acu} setDisplayBoxes={setDisplayBoxes} displayBoxes={displayBoxes}></Cart>
  </div>
}

export default Products