import React from "react";

const About = ()=>{

  return (
    <main className="main">
      <section className="main__section">
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
        <div className="main__section__div">
          <figure className="main__section__figure">
            <img
              src="./images/woman.png"
              alt="Mujer usando su móvil desde el sofá"
              style={{ minWidth: "200px", maxWidth: "35vw" }}
              className="main__section__figure__image"
            />
          </figure>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia repudiandae consequatur nihil omnis saepe sit libero quam eum reiciendis, fugit cupiditate alias architecto placeat officia a totam quasi unde ipsum?</p>
        </div>
      </section>
      
  </main>
  )
}

export default About