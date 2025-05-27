import React, {useState} from "react";
import { useCart } from './context/CartContext'


const Cart = ()=> {
  const { cartData, setCartData } = useCart();

  const limpiar = ()=> {
    let cartDataTemp = {...cartData}
    cartDataTemp.cantItems = cartData.cantItems.map(() => 0)
    cartDataTemp.total = 0.00
    setCartData(cartDataTemp)
  }

  const compra = ()=> alert("Usted realizo una compra FICTICIA por $" + cartData.total + " imaginarios")


  return <div>
    <section id="carrito" className="main__section__products__cart">
      <h2 className="main__section__products__cart--title">Productos</h2>
      <ol id="compras" className="main__section__products__cart__ol">
        {
          cartData.listOfItems.map(( item, key )=>{
            if (cartData.cantItems[key] > 0){
              return (
                <li key={key} className="main__section__products__cart--li">
                  <span>{`${item.name} * ${cartData.cantItems[key]} unidades`}</span><span>{`- Con un valor de ${item.price} por unidad`}</span>
                </li>
              )
            }
          })
        }
      </ol>
      <div>
              <h4 className="main__section__products__cart--total">Total: ${cartData.total}</h4>
      </div>
      <div>
        {/**reparar metodologia BEM en botones */}
        <button onClick={ limpiar } className="main__section__products__cart-button">Limpiar Carrito</button>
        <button onClick={ compra } className="main__section__products__cart-button">Comprar</button>
      </div>

    </section>
  </div>
  
}

export default Cart