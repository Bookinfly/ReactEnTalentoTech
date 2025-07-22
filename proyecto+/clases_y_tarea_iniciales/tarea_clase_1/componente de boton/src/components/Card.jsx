import React from "react";
import BotonReutilizableClase2 from "./BotonReutilizableClase2";

export const Card = ( { title, description, colorBInfo, borderInfo, paddingInfo, colorInfo, marginInfo } ) => {
  const styles = { backgroundColor: colorBInfo, border: borderInfo, padding: paddingInfo, color: colorInfo, margin: marginInfo}

  /**
   * En React, los estilos CSS se manejan como un objeto JavaScript,
   *  no como una cadena de texto con reglas CSS tradicionales. En los objetos de JS, las propiedades se separan con comas ,
   * , no con punto y coma ;.
   */

  return <div style={ styles }>
    <h2>{ title }</h2>
    <p>{ description }</p>

    <BotonReutilizableClase2 texto="Ver Más" color="Green"/>
  </div>
}