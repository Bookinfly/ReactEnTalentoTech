import React, { useState } from "react"
import { Helmet } from "react-helmet-async"


const Contact = () => {
  const [tema, setTema] = useState("consulta")

  return (
      <form style={{ backgroundColor: "var(--color-dark)", color: "var(--color-one)" }}>
        <Helmet>
          <title>Contacto</title>
          <meta name="description" content="habla con nuestros representantes" />
        </Helmet>
        <fieldset className="mb-4">
          <legend style={{ color: "var(--color-one)" }} className="h1 fw-bold">Formulario de contacto</legend>

          <label htmlFor="nameC" style={{ color: "var(--color-one)" }}>Nombre:</label>
          <input type="text" id="nameC" name="nameC" placeholder="Fulano" required />

          <label htmlFor="apellidoC" style={{ color: "var(--color-one)" }}>Apellido:</label>
          <input type="text" id="apellidoC" name="apellidoC" placeholder="López" />

          <label htmlFor="emailC" style={{ color: "var(--color-one)" }}>Email:</label>
          <input type="email" id="emailC" name="emailC" placeholder="flopez@gmail.com" required />
        </fieldset>

        <fieldset className="mt-4">
          <legend className="mt-4" style={{ color: "var(--color-one)" }}>Mensaje</legend>

          <label htmlFor="temaC" style={{ color: "var(--color-one)" }}>Motivo del mensaje:
            <select
              name="temaC"
              className="m-2 w-25"
              value={tema}
              onChange={(e) => setTema(e.target.value)}
            >
              <option value="consulta">Consulta</option>
              <option value="reclamo">Reclamo</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label htmlFor="textoC" style={{ color: "var(--color-one)" }}>Mensaje:</label>
          <textarea id="textoC" name="textoC" placeholder="Ingrese su texto aquí..." className="col-11" />
        </fieldset>

        <button type="submit" className="fw-bold col-6 rounded-3 mx-auto mt-2">Enviar</button>
      </form>
  )
}

export default Contact;
