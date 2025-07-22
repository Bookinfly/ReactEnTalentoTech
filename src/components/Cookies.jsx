import React from "react";

const Cookies = ()=> {

  return (
      <main>
        <section className="main__section">
          {/**reutlizamos estilos de main */}
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
              <h2 className="h1 mb-1" style={{color:"var(--color-one)"}}>Política de Cookies</h2>
              <p className="mb-5 h6 fw-bold" style={{color:"var(--color-one)"}}>Aclaración: Esta es una página de ejemplo y no representa una tienda real.</p>

              <div className="rounded-3 p-4" style={{backgroundColor:"var(--color-dark)"}}>

                <h3>1. ¿Qué son las cookies?</h3>
                <p className="mb-4">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para mejorar la experiencia del usuario y optimizar el funcionamiento del sitio.</p>

                <h3>2. Tipos de cookies que utilizamos</h3>
                <p  className="mb-4">Este sitio de ejemplo puede incluir los siguientes tipos de cookies:</p>
                <ul>
                    <li><strong>Cookies esenciales:</strong> Son necesarias para el funcionamiento básico del sitio.</li>
                    <li><strong>Cookies analíticas:</strong> Permiten analizar el tráfico del sitio y mejorar la experiencia del usuario.</li>
                    <li><strong>Cookies de terceros:</strong> Pueden ser utilizadas por servicios externos, como plataformas de publicidad o redes sociales.</li>
                </ul>

                <h3>3. Gestión de cookies</h3>
                <p className="mb-4">Al visitar este sitio de ejemplo, puedes aceptar o rechazar el uso de cookies. La gestión de cookies puede realizarse a través de la configuración de tu navegador.</p>

                <h3>4. Modificaciones en la política de cookies</h3>
                <p className="mb-4">Esta política de cookies es ficticia y puede ser modificada sin previo aviso, ya que el sitio no es real.</p>

                <h3>5. Contacto</h3>
                <p  className="mb-4">Este sitio es un ejemplo y no cuenta con un servicio de atención al cliente.</p>

              </div>
          </section>
      </main>
    )
  }
  

export default Cookies