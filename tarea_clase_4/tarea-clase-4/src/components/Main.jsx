import React from "react";
import Products from './Products'

let listItems = [{producto: "leche", precio:1}, {producto:"azúcar", precio:1.2}, {producto:"galletitas", precio:2}, {producto:"café",precio:3}, {producto:"arroz",precio:2}, {producto:"jugo",precio:0.5}, {producto:"gaseosa",precio:1}]

const Main = () => {
  return (
    <main className="main">
      <section className="main__section">
        <h1 className="main__section__title">Crazy
          <span className="main__section__title--mod">MARKET</span>
        </h1>
        <h2 className="main__section__subtitle">Ofertas de otro mundo</h2>
        <div className="main__section__div">
          <figure className="main__section__figure">
            <img src="./images/woman.png" alt="Mujer usando su móvil desde el sofá" style={{minwidth:"200px", maxWidth:"35vw"}} 
              className="main__section__figure__image"/>
            {/* <figcaption className="main__section__figure__caption">Aproveche su tiempo</figcaption> */}
          </figure>
          <h3 className="main__section__h3">Olvida la fila del super!!!</h3>
        </div>
      </section>
      <section className="main__section">
        <Products listItems={listItems}/>
      </section>
    </main>
  )
}

export default Main

