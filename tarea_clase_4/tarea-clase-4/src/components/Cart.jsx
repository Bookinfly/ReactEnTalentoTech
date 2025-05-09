import React, {useState} from "react";


const Cart = ({ listOfItems, cantItems, total, setDisplayBoxes, displayBoxes })=> {

  let [displaySec, setDisplaySec] = useState({display:"none"})

  const mostrar = () => {
    setDisplaySec({ display: "block" }) // Modifica el estado sin `useEffect`
    setDisplayBoxes({ display: "none"})
  };


  return <div>
    <button onClick={ mostrar } style={displayBoxes}>Ver Carrito</button>
    <section id="carrito" style={displaySec}>
      <h3>Productos</h3>
      <ol id="compras">
        {
          listOfItems.map(( item, key )=>{
            if (cantItems[key] > 0){
              return (
                <li key={key}>
                  <span>{`${item.producto} * ${cantItems[key]} unidades`}</span>
                </li>
              )
            }
          })
        }
      </ol>
      <h4>Total: ${total}</h4>
    </section>
  </div>
  

}

export default Cart