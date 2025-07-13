import React, { useState, useContext } from "react"
import FormularioEdicion from "./FormularioEdicion"
// import { useCart } from "./context/CartContext"
import { Link } from 'react-router-dom'
import { ProductsContext } from "./context/ProductsCRUDContext"


const Admin = ()=> {

  const { productos = [] } = useContext(ProductsContext)

  // const { cartData, setCartData } = useCart();
  
  const onCerrar = ()=>{
    alert("onCerrar no hace nada todavía")
  }

  const [editar, setEditar ] = useState(false)

  const [flagRenderForm, setFlagRenderForm ] = useState(false)

  const [seleccionadoPorID, setSeleccionadoPorID ] = useState({})

  const cambiarProducto = (ident)=> {//ident es el id del seleccionado
    setSeleccionadoPorID(
      productos.find(producto => producto.id === ident)//buscamos el elemento que coincida
    )
    console.log(seleccionadoPorID)
    setFlagRenderForm(true)
    setEditar(true)
    console.log(flagRenderForm)
  }

  const volverAtras = () => {
  setFlagRenderForm(false)
  setEditar(false)
  setSeleccionadoPorID({})
}

  const nuevoProducto = ()=> {
    setEditar(false)
    setSeleccionadoPorID({})
    setFlagRenderForm(true)
  }

<button onClick={volverAtras} >Volver a la lista</button>

  return (
    <div > 

          <section className="main__section__products">
            <h1>Gestión de productos</h1>
            {!flagRenderForm&&<button onClick={nuevoProducto} >Agregar Producto</button>}

        {/** recorre la lista y en cada iteración crea un div */}
        <div className="main__section__products__list" >
          { !flagRenderForm&&productos.map( (item, key)=>{
            return (
              <div key={key} className="main__section__products__list--card">
                <figure className="card__figure">
                  <img src={item.image} alt={item.name} className="card__figure--img"/>
                </figure>
                <h3 className="card--name">{ `${item.name}` }</h3>
                <p className="card--des">{item.description}</p>
                <h4 className="card--price">${item.price}</h4>
                <h2 className="card--name">${item.id}</h2>
                <Link to={`/detalle/${item.id}`} className="button-link"> Ver Detalle </Link>
                <button onClick={()=>cambiarProducto(item.id)}>Editar</button>
              </div>
            )
          })
        }
      {
              flagRenderForm&&editar?<div className="main__section__products__list--card">
                <figure className="card__figure">
                  <img src={seleccionadoPorID.image} alt={seleccionadoPorID.name} className="card__figure--img"/>
                </figure>
                <h3 className="card--name">{ `${seleccionadoPorID.name}` }</h3>
                <p className="card--des">{seleccionadoPorID.description}</p>
                <h4 className="card--price">${seleccionadoPorID.price}</h4>
                <h2 className="card--name">${seleccionadoPorID.id}</h2>
                <Link to={`/detalle/${seleccionadoPorID.id}`} className="button-link"> Ver Detalle </Link>
                <button onClick={()=>cambiarProducto(seleccionadoPorID.id)}>Editar</button>
              </div>:<></>
      }
        </div>
      </section>
      {/* <CrearProducto onAgregar={agregarProducto}/> */}
      { 
        flagRenderForm&&<div>
        <FormularioEdicion onCerrar={onCerrar} productoInicial={editar===true?seleccionadoPorID:{}} modo={editar===true?"editar":"agregar"}/>
        <button onClick={volverAtras} className="button-back">Volver a la lista</button>
        </div>
      }
      
    </div>)
  
  }

export default Admin