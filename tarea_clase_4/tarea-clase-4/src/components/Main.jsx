import React from "react";
import Products from './Products'

let listItems = [{producto: "leche", precio:1}, {producto:"azúcar", precio:1.2}, {producto:"galletitas", precio:2}, {producto:"café",precio:3}, {producto:"arroz",precio:2}, {producto:"jugo",precio:0.5}, {producto:"gaseosa",precio:1}]

const Main = ()=> {
  return (
    <main>
      <section>
        <h1>Crazy<span>MARKET</span></h1>
        <h2>Ofertas de otro mundo</h2>
        <div>
          <figure>
          <img src="./images/woman.png" alt="Mujer usando su móvil desde el sofá" style={{width:"600px", maxWidth:"200px"}}/>
          <figcaption>Aproveche su tiempo</figcaption>
          </figure>
          <h3>Olvida la fila del super!!!</h3>
        </div>
      </section>
      <section>
      <Products listItems={listItems}/>      </section>

    </main>
  )
}

export default Main