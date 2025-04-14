//tarea clase 2

import React from "react";

export const Ol = ({ lista }) => {
  return <ol>
    { lista.map( (item, index) => <li key={index}>{item}</li>) }
  </ol>
}