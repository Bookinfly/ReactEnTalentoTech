import React from "react";

const About = ()=>{

  return (
    <main className="container" style={{backgroundColor:"var(--color-dark)" , color:"var(--color-light)"}}>

        <section className="main__section" style={{backgroundColor:"var(--color-dark)" , color:"var(--color-one)"}}> 
          {/**reutilizamos estilos de main */}
          <h1 className="main__section__title">
            Crazy <span className="main__section__title--mod">MARKET</span>
          </h1>
          <h2 className="main__section__subtitle">Ofertas de otro mundo</h2>
          <figure className="main__section__figure--logo">
            <img
              src="./images/logo.png"
              alt="logo CrazyMARKET"
              className="main__section__figure__img--logo"
            />
          </figure>
          <div className="main__section__div" style={{backgroundColor:"var(--color-two)" , color:"var(--color-one)"}}>
            <figure className="main__section__figure" >
              <img
                src="./images/amoDeCasa.png"
                alt="Hombre mirando su cocina cocina con orgullo en estilo pin-up"
                style={{ minWidth: "200px", maxWidth: "35vw" }}
                className="main__section__figure__image"
              />
            </figure>
            
            <h4 className="h2 text-center d-flex align-items-center justify-content-center">Nuestra misión es acercarte estilo y funcionalidad.
              </h4>
          </div>
          
        </section>

<section id="nosotros" className="col-12 p-4">
  <h2 className="h1 mb-4" style={{ color: "var(--color-strong)" }}>
    Sobre nosotros
  </h2>

  <div className="col-12 container p-4">

    {/* BLOQUE 1: texto a la izquierda, imagen a la derecha */}
    <div className="d-flex align-items-center justify-content-between flex-row mb-5 rounded-3"
        style={{ backgroundColor: "var(--color-two)", color: "var(--color-light)" }}>
      <div className="col-9 p-4">
        <p className="fs-5">
          Creemos que la cocina debe ser un espacio para disfrutar ❤️ —en familia, con amigos o en tu momento personal. Por eso, buscamos armonizar el ambiente para mejorar cada experiencia, y potenciar la eficiencia para que ganes tiempo y lo dediques a lo que realmente te hace feliz.  
          Y si disfrutás de la cocina tanto como nosotros, tenemos un catálogo de artículos decorativos que te va a hacer perder el sentido... ¡pero no la sazón!
        </p>
      </div>
      <img src="./images/cocina1.jpg" alt="cocina" className="col-3 rounded-3" style={{ minWidth: "200px", maxWidth: "500px" }} />
    </div>

    {/* BLOQUE 2: imagen a la izquierda, texto a la derecha */}
    <div className="d-flex align-items-center justify-content-between flex-row-reverse mb-5 rounded-3" style={{ backgroundColor: "var(--color-one)", color: "var(--color-dark)" }}>
      <div className="col-9 p-4">
        <p className="fs-5">
          En crazyMarket creemos que la cocina es el corazón del hogar. Por eso, te traemos un universo de electrodomésticos, utensilios, muebles y decoración para que puedas transformar tu cocina en un espacio de revista, sin salir de casa.
        </p>
      </div>
      <img src="./images/detalleColcina.jpg" alt="plano detalle cocina" className="col-3 rounded-3" style={{ minWidth: "200px", maxWidth: "500px" }} />
    </div>

    {/* BLOQUE 3: texto a la izquierda, imagen a la derecha */}
    <div className="d-flex align-items-center justify-content-between flex-row mb-5 rounded-3" style={{ backgroundColor: "var(--color-two)", color: "var(--color-light)" }}>
      <div className="col-9 p-4">
        <p className="fs-5">
          Nuestra tienda nació con una idea simple pero poderosa: combinar diseño, funcionalidad y precios increíbles en un solo lugar. Cada producto que ves fue seleccionado pensando en ofrecerte calidad, estilo y una experiencia práctica para tu día a día.
        </p>
      </div>
      <img src="./images/cocinaVerde.jpg" alt="estilo cocina" className="col-3 rounded-3" style={{ minWidth: "200px", maxWidth: "500px" }} />
    </div>

    {/* BLOQUE 4: imagen a la izquierda, texto a la derecha */}
    <div className="d-flex align-items-center justify-content-between flex-row-reverse mb-5 rounded-3" style={{ backgroundColor: "var(--color-one)", color: "var(--color-dark)" }}>
      <div className="col-9 p-4">
        <p className="fs-5">
          ¿Lo mejor? No tenés que recorrer kilómetros ni visitar mil locales. Con unos pocos clics, encontrás lo que necesitás para equipar o renovar tu cocina, desde licuadoras de última generación hasta detalles decorativos que hacen la diferencia.
        </p>
      </div>
      <img src="./images/utensillos2.jpg" alt="detalles decorativos" className="col-3 rounded-3" style={{ minWidth: "200px", maxWidth: "500px" }} />
    </div>

    {/* BLOQUE 5: texto final sin imagen */}
    <div className="p-4 rounded-3" style={{ backgroundColor: "var(--color-two)", color: "var(--color-light)" }}>
      <p className="fs-5">
        Nos encanta lo que hacemos, y eso se nota. Estamos siempre en la búsqueda de novedades, tendencias y curiosidades del mundo del diseño de cocinas para que te inspires, disfrutes y te sorprendas cada vez que entres a crazyMarket.
      </p>
      <p className="fs-5">
        Gracias por visitarnos. ¡Esperamos ayudarte a crear la cocina que soñás!
      </p>
    </div>

  </div>
</section>
  </main>
  )
}

export default About