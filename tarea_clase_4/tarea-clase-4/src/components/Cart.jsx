import React, {useState} from "react";
import { useCart } from './context/CartContext'


const Cart = ({ setDisplayBoxes, displayBoxes })=> {
  const { cartData } = useCart();

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
          cartData.listOfItems.map(( item, key )=>{
            if (cartData.cantItems[key] > 0){
              return (
                <li key={key} className="main__section__products__cart--li">
                  <span>{`${item.name} * ${cartData.cantItems[key]} unidades`}</span>
                </li>
              )
            }
          })
        }
      </ol>
      <div>
              <h4 className="main__section__products__cart--total">Total: ${cartData.total}</h4>
      </div>
    </section>
  </div>
  
}

export default Cart