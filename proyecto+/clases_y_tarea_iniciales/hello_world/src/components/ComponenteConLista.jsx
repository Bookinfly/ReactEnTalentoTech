import React from "react"

//clase 2

function ComponenteConLista() {
  const usuarios = ['Ana', 'Luis', 'Pedro', 'Maria']
  return (
    <ul>
      {/**Dentro de los {} hay un bloque de JS */}
      {usuarios.map(usuario => (
      <li key={usuario}>{usuario}
      </li>
    ))}
    </ul>
    
  )
}

/**
 * Nota personal:
 * 
 * React usa varias abstracciónes
 * Las etiquetas XML en React funciona como elementos de React
 * .Map no devuelve un array común como en Js, sino uno de objetos de React que esté puede renderizar sín desestructurarlo de forma expliciata
 */

export default ComponenteConLista