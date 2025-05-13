import React, {useState} from "react";


const Cart = ({ listOfItems, cantItems, total, setDisplayBoxes, displayBoxes })=> {

  let [displaySec, setDisplaySec] = useState({display:"none"})

  const mostrar = () => {
    setDisplaySec({ display: "block" }) // Modifica el estado sin `useEffect`
    setDisplayBoxes({ display: "none"})
  };


  return <div>
    <button onClick={ mostrar } style={displayBoxes} className="main__section__products__cart-button">Ver Carrito</button>
    <section id="carrito" style={displaySec} className="main__section__products__cart">
      <h2 className="main__section__products__cart--title">Productos</h2>
      <ol id="compras" className="main__section__products__cart__ol">
        {
          listOfItems.map(( item, key )=>{
            if (cantItems[key] > 0){
              return (
                <li key={key} className="main__section__products__cart--li">
                  <span>{`${item.producto} * ${cantItems[key]} unidades`}</span>
                </li>
              )
            }
          })
        }
      </ol>
      <div>
              <h4 className="main__section__products__cart--total">Total: ${total}</h4>
      </div>
    </section>
  </div>
  

}

export default Cart