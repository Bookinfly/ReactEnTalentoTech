import React from "react";

const Politicas = () => {
  return (
    <main className="p-4">

      <section className="main__section">
        {/**reutizamos estilos del main */}
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

      <section className="" style={{color:"var(--color-light)"}}>
        <h2 className="h1 mb-1" style={{color:"var(--color-one)"}}>Políticas de Uso</h2>
        <p className="mb-5 h6 fw-bold" style={{color:"var(--color-one)"}}>Aclaración: Esta es una página de ejemplo y no representa una tienda real.</p>

        <div className="rounded-3 p-4" style={{backgroundColor:"var(--color-dark)"}}>
          <h3>1. Generalidades</h3>
        <p className="mb-4">Este sitio web ha sido creado con fines ilustrativos. No se realizan ventas de productos ni servicios a través de esta página.</p>

        <h3>2. Registro de Usuarios</h3>
        <p className="mb-4">No es necesario registrar una cuenta para acceder a los contenidos de este sitio. No se recopilan datos personales ni información financiera.</p>

        <h3>3. Productos y Precios</h3>
        <p className="mb-4">Las imágenes, descripciones y precios mostrados son ficticios y solo sirven para representar un posible comercio electrónico.</p>

        <h3>4. Métodos de Pago</h3>
        <p className="mb-4">Esta página no procesa pagos, por lo que cualquier información sobre métodos de pago es meramente ilustrativa.</p>

        <h3>5. Envíos y Devoluciones</h3>
        <p className="mb-4">Al ser un sitio de prueba, no se realizan envíos ni devoluciones de productos.</p>

        <h3>6. Propiedad Intelectual</h3>
        <p className="mb-4">Todos los contenidos presentados en esta página son ejemplos y no representan un negocio real. Se recomienda no utilizar estos textos sin adaptarlos a la normativa vigente en Argentina.</p>

        <h3>. Contacto</h3>
        <p className="mb-4">Este sitio no cuenta con un servicio de atención al cliente, ya que se trata de una demostración.</p>
        </div>
        
      </section>     
    </main>
  )
}

export default Politicas