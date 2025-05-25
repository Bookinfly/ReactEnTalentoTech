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

  let [displayBoxes, setDisplayBoxes] = useState({display:"flex"})

  const price = () => {
    let x = 0
    listItems.forEach((item, key) => {
      if (cant[key] > 0) {
        x += item.price * cant[key]
      }
    })
    const total = parseFloat(x.toFixed(2))
    if (acu !== total) {
      setAcu(total)//seteo acumulador dentro de condicional
  }
}
  /**
   * 
   * @param {*} key  un número a utilizar para marcar la position
   *sin return, solo actualiza el useState
   */
  const suma = (key)=> {
    let newArray = [...cant]
    newArray[key] = newArray[key] + 1
    setCant(newArray) //evento en boton ejecuta setCant y lo que lleva que useEffect ejecute price() (evento)
  }

  const resta = (key)=> {
    let newArray = [...cant]
    if(newArray[key] > 0) {
        newArray[key] -= 1
        setCant(newArray) //evento en boton ejecuta setCant y lo que lleva que useEffect ejecute price() (evento)
    }
  }

  useEffect(() => {
    price()
  }, [cant])//si cambia cant, ejecuta price() y ejecuta setAcu (evento)


  return <div className="main__section__products">
    {/** recorre la lista y en cada iteración crea un div */}
    <div className="main__section__products__list" style={displayBoxes}>
      { listItems.map( (item, key)=>{
        return (
          <div key={key} className="main__section__products__list--card">
            <figure className="card__figure">
              <img src={item.image} alt={item.name} className="card__figure--img"/>
            </figure>
            <h3 className="card--name">{ `${item.name}` }</h3>
            <p className="card--des">{item.description}</p>
            <h4 className="card--price">${item.price}</h4>
            <div className="card__box">
                          <button  onClick={ () => {resta(key)} } className="card__box--button2">-</button>

              <button  onClick={ () => {suma(key)} } className="card__box--button1">+</button>
            <span className="card__box--cant">{`Unidades ${cant[key]} `}</span>
            <span className="card__box--precio">{`Total $${(cant[key]*item.price).toFixed(2)}`}</span>
            </div>  
          </div>
        )
      })
    }
    </div>
    <div className="main__section__products__div" style={displayBoxes}>
      <span className="main__section__products__div--price">Carrito por un todal de ${acu.toFixed(2)}</span>
    </div>
    <Cart listOfItems={listItems} cantItems={cant} total={acu} setDisplayBoxes={setDisplayBoxes} displayBoxes={displayBoxes} ></Cart>
  </div>
}

export default Products