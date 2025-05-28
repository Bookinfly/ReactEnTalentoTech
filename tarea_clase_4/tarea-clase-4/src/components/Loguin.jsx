import React from "react";

const Loguin = ()=> {

  return (
    <form>
      <fieldset>
        <legend>Iniciar sesión</legend>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" placeholder="ejemplo@correo.com"/>

        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="pass" id="pass" />

        <button type="submit"> Entrar </button>

      </fieldset>

      <button type="button">Crear cuenta</button>


    </form>
  )
}

export default Loguin