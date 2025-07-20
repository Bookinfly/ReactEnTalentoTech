import React, { useState, useContext } from "react"
import FormularioEdicion from "./FormularioEdicion"
import { Link } from 'react-router-dom'
import { ProductsContext } from "./context/ProductsCRUDContext"

/**
 * 
 * @returns componente con sección admin
 */
const Admin = ()=> {

  const { productos, eliminarProducto } = useContext(ProductsContext)//lista de productos y funcion de eliminar extraidas del contexto

  const onCerrar = ()=>{//todavía en proceso
    alert("onCerrar no hace nada todavía")
  }

  const [editar, setEditar ] = useState(false)//un estado con un boleano

  const [flagRenderForm, setFlagRenderForm ] = useState(false)//un estado con un boleano

  const [seleccionadoPorID, setSeleccionadoPorID ] = useState({})//un estado con un objeto

  /**
   * Busca el elemento que coincida con el ID del parámetro en un lista
   * para pasarlo como parametreo al setter: setSeleccionadoPorID()
   * @param {el id del objeto seleccionado} ident 
   * acomoda banderas en true
   */
  const cambiarProducto = (ident)=> {
    setSeleccionadoPorID(
      productos.find(producto => producto.id === ident)//buscamos el elemento que coincida
    )
    setFlagRenderForm(true)
    setEditar(true)
  }

  /**
   * pasa las 2 banderas a false
   * deja como un objeto vacio a seleccionadoPoID
   */
  const volverAtras = () => {
  setFlagRenderForm(false)
  setEditar(false)
  setSeleccionadoPorID({})
}

  /**
   * la bandera editar la deja false,
   *  la otra en true
   * deja como un objeto vacio a seleccionadoPoID
   */
  const nuevoProducto = ()=> {
    setEditar(false)
    setSeleccionadoPorID({})
    setFlagRenderForm(true)
  }

/**
 * añade una etapa de verificación a la eliminación
 * @param {un id} ident 
 */
  const eliminarProductoPorID = (ident) => {
    if(confirm(`¿Estás seguro de eliminar el producto con iD:${ident}`)) {
      console.log("iden es tipo : " + typeof(ident))
      eliminarProducto(ident)//función del contexto
    }
  }

<button onClick={volverAtras} >Volver a la lista</button>

  return (
    <div > 

          <section className="main__section__products">
            <h1>Gestión de productos</h1>
            {/**condiona el render del boton */}
            {!flagRenderForm&&<button onClick={nuevoProducto} >Agregar Producto</button>}

        {/** recorre la lista y en cada iteración crea un div */}
        <div className="main__section__products__list" >
          { !flagRenderForm&&productos.map( (item, key)=>{
            {/**item es un elemento de la lista producto */}
            {/**condiciona la creación de la lista */}
            return (
              <div key={key} className="main__section__products__list--card">
                <figure className="card__figure">
                  <img src={item.image} alt={item.name} className="card__figure--img"/>
                </figure>
                <h3 className="card--name">{ `${item.name}` }</h3>
                <p className="card--des">{item.description}</p>
                <h4 className="card--price">${item.price}</h4>
                <h2 className="card--name">ID: {item.id}</h2>
                <Link to={`/detalle/${item.id}`} className="button-link"> Ver Detalle </Link>
                <button onClick={()=>cambiarProducto(item.id)}>Editar</button>
                <button onClick={()=>eliminarProductoPorID(item.id)}>Eliminar Producto</button>
              </div>
            )
          })
        }
                    {/**condiciona la creación de una card*/}
      {
              flagRenderForm&&editar?<div className="main__section__products__list--card">
                <figure className="card__figure">
                  {/**en lugar de Item, tenemos a seleccionado por ID */}
                  <img src={seleccionadoPorID.image} alt={seleccionadoPorID.name} className="card__figure--img"/>
                </figure>
                <h3 className="card--name">{ `${seleccionadoPorID.name}` }</h3>
                <p className="card--des">{seleccionadoPorID.description}</p>
                <h4 className="card--price">${seleccionadoPorID.price}</h4>
                <h2 className="card--name">{`ID: ${seleccionadoPorID.id}`}</h2>
                <Link to={`/detalle/${seleccionadoPorID.id}`} className="button-link"> Ver Detalle </Link>
                <button onClick={()=>cambiarProducto(seleccionadoPorID.id)}>Editar</button>
              </div>:<></>
      }
        </div>
      </section>
      { 
        flagRenderForm&&<div>
          {/**aca usamos seleccionadoPorIDe en el condicional del prop */}
        <FormularioEdicion onCerrar={onCerrar} productoInicial={editar===true?seleccionadoPorID:{}} modo={editar===true?"editar":"agregar"} actualizarCard={setSeleccionadoPorID}/>
        <button onClick={volverAtras} className="button-back">Volver a la lista</button>
        </div>
      }
      
    </div>)
  
  }

export default Admin