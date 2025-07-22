import React, { useState, useMemo } from "react";

const InterestGallery = ( { interest } ) => {
  // const colors = ["blue", "black", "red", "purple", "green", "orange"]
  const colors = useMemo(() => {
    return interest.map((text ,index)=> {
      // lógica para generar colores
      let tone = 111111 * (index + 1)
      let plus = tone + (Math.floor(Math.random() * 888888))
      if (plus > 999999) {
        let exa = ["a", "b", "c", "d", "e", "f"]
        plus = ""

        for (let i=0; i<=6; i++){
          let bingo = Math.floor(Math.random() * 5)

          plus = plus + exa[bingo]
        }
      }
      return `#${plus}`
    });
  }, []);
  
  console.log(colors)
  

  let [color, setColor] = useState(interest.map(()=>0))//nos da un array y por cada interes va a poner un espacio con un 0


  const change = (pos)=> {
    setColor(prev => prev[pos] < 5 ? (prev.with(pos, (prev[pos] + 1)) ) : (prev.with(pos, (0)) ))//prev es un argumento automático definido por posición
    //no hacer cambios de las variables del useState por fuera del setter
    // forma vieja sin Vite que compile setColor(prev => prev.map((val, i) => i === pos ? (val < 5 ? val + 1 : 0) : val))

  }

  return (
    <div>
      { interest.map((text, index)=>{

        return (
          <button key={ index } onClick={ ()=>change(index) } style={ { backgroundColor:colors[color[index]], margin:"10px" }}>{ text }</button>
        )
      }
      )}
    </div>
  )

}

export default InterestGallery