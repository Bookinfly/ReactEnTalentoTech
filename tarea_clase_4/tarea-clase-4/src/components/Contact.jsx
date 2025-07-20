import React from "react";

const Contact = ()=> {
  return (
    <main className="container p-4" style={{ backgroundColor: "var(--color-dark)", color: "var(--color-one)" }}>
      <h1 className="h1" style={{ color: "var(--color-one)" }}>Formulario de contacto</h1>
      <form action="" className="col-12" >
        <fieldset className="m-1">
          <legend>Datos personales</legend>
          <label htmlFor="nameC">Nombre: 
            <input type="text" name="nameC" placeholder="Fulano" required className="m-2"/>
          </label>
          <label htmlFor="apellidoC">Apellido: 
            <input type="text" name="apellidoC" placeholder="Lopéz" className="m-2"/>
          </label>
          <label htmlFor="emailC">Email: 
            <input type="email" name="emailC" placeholder="flopez@gmail.com" required className="m-2"/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Mensaje</legend>
          <label htmlFor="temaC">Motivo del mensaje: 
            <select name="temaC" id="" className="m-2 w-25" style={{ color: "var(--color-dark)" }}>
              <option value="consulta" selected>Consulta</option>
              <option value="reclamo" >Reclamo</option>
              <option value="otro" >Otro</option>
            </select>
          </label>
          <label htmlFor="textoC">
            <textarea name="textoC" id="" className="m-2 col-11">
              Ingrese su texto aquí:...
            </textarea>
          </label>
        </fieldset>
        <button type="" className="m-2 rounded-3 col-6 fw-bold mx-auto" >Enviar</button>
      </form>
    </main>
  )
}

export default Contact