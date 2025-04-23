import React, { useState } from "react";

const InterestGallery = ( { interest } ) => {
  const colors = ["blue", "black", "red", "purple", "green", "orange"]
  let [color, setColor] = useState(0)

  const change = ()=>{
    setColor(prev => prev < 5 ? (prev + 1) : 0)//prev es un argumento automático definido por posición
    //no hacer cambios de las variables del useState por fuera del setter
  }

  return (
    <div>
      { interest.map((text, index)=>{

        return (
          <button key={ index } onClick={ change } style={ { backgroundColor:colors[color] }}>{ text }</button>
        )
      }
      )}
    </div>
  )

}

export default InterestGallery