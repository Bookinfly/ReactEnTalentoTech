import { useState } from "react";
import './css/personalizacion.css';

export function Boton() {
  let [mostrarCaja, setMostrarCaja] = useState(false);

  const handleClick = () => setMostrarCaja(true);

  return (
    <>
      <div>
        <button className="Botonaso" onClick={handleClick}>
          Click Here 👇
        </button>
      </div>
      {mostrarCaja && (
        <div className="LaCaja">Hiciste los ejercicios sugeridos? 🤨</div>
      )}
    </>
  )

  
}
  



