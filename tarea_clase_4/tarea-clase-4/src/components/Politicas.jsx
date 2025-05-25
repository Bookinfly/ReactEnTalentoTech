import React from "react";

const Politicas = () => {
  return (
    <main>

      <section className="main__section">
        <h1 className="main__section__title">
          Crazy <span className="main__section__title--mod">MARKET</span>
        </h1>
        <figure className="main__section__figure--logo">
          <img
            src="./images/logo.png"
            alt="logo CrazyMARKET"
            className="main__section__figure__img--logo"
          />
        </figure>
      </section>
      <section className="main__section">
        <h2 className="main__section__subtitle">Políticas de Uso</h2>
        <p><strong>Aclaración:</strong> Esta es una página de ejemplo y no representa una tienda real.</p>

        <h3>1. Generalidades</h3>
        <p>Este sitio web ha sido creado con fines ilustrativos. No se realizan ventas de productos ni servicios a través de esta página.</p>

        <h3>2. Registro de Usuarios</h3>
        <p>No es necesario registrar una cuenta para acceder a los contenidos de este sitio. No se recopilan datos personales ni información financiera.</p>

        <h3>3. Productos y Precios</h3>
        <p>Las imágenes, descripciones y precios mostrados son ficticios y solo sirven para representar un posible comercio electrónico.</p>

        <h3>4. Métodos de Pago</h3>
        <p>Esta página no procesa pagos, por lo que cualquier información sobre métodos de pago es meramente ilustrativa.</p>

        <h3>5. Envíos y Devoluciones</h3>
        <p>Al ser un sitio de prueba, no se realizan envíos ni devoluciones de productos.</p>

        <h3>6. Propiedad Intelectual</h3>
        <p>Todos los contenidos presentados en esta página son ejemplos y no representan un negocio real. Se recomienda no utilizar estos textos sin adaptarlos a la normativa vigente en Argentina.</p>

        <h3>. Contacto</h3>
        <p>Este sitio no cuenta con un servicio de atención al cliente, ya que se trata de una demostración.</p>
      </section>     
    </main>
  )
}

export default Politicas