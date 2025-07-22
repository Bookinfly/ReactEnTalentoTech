import React from "react"
import { useParams } from "react-router-dom"
import { useCart } from './context/CartContext'
import { Link } from 'react-router-dom'



const ProductoDetalle = ()=>{
  const { id } = useParams()
  const { cartData } = useCart();

const item = cartData.listOfItems.find(element => element.id == id);


  return (
      <div className="main__section__products--detalle">
        <div className="main__section__products__list--detalle">
            <div key={id} className="main__section__products__list--card">
              <figure className="card__figure">
              <img src={item.image} alt={item.name} className="card__figure--img"/>
              </figure>
              <h3 className="card--name">{ `${item.name}` }</h3>
              <p className="card--des">{item.description}</p>
              <p className="card--des">{item.departament}</p>
              <h4 className="card--price">${item.price}</h4>
              <Link to={'/'} className="button-link"> Volver </Link>
            </div>
          </div>
      </div>
        )
}

export default ProductoDetalle