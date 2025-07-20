import { useState } from "react";
export default function AllProductos({ productos }) {
const [busqueda, setBusqueda] = useState("");
const productosFiltrados = productos.filter((producto) =>
  producto.name.toLowerCase().includes(busqueda.toLowerCase())
)
return (
  <>
  <input
    type="text"
    placeholder="Buscar productos..."
    className="form-control mb-3"
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
        { productosFiltrados.listOfItems.map( (item, key)=>{
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
  </>
)
}