import React, { useState } from "react"

function Contador() {
  const [ contador, setContador ] = useState(0)
  //no se debe modificar el estado del useState directamente (contador en este caso), usamos el setter
  //Se ejecuta en cada renderización

  /*
useState no combina estados automáticamente.
Si manejas múltiples valores dentro de un objeto, debes actualizarlo manualmente preservando los datos previos.
Ejemplo: setUsuario({ ...usuario, nuevaPropiedad: valor }) 
También puedes usar múltiples useState separados para cada valor individual.
*/

  return (
    <div>
      <p>Valor del contador: { contador }</p>
      <button onClick={ ()=> setContador(contador + 1) }>
        Incrementar
      </button>
    </div>
  )
}

export default Contador