import React from "react";

const ProyectCard = ( { nameProyect, description, textButton } )=> {
  const search = () => console.log(`Explorando ${ nameProyect }`)

  return (
    <div style={ {display:"flex", width:"80vw", margin:"auto", boxSizing: "border-box", border:"2px black solid", padding:"20px", backgroundColor:"gray" }}>
    <h2>{ nameProyect }</h2>
    <p> { description }</p>
    <button onClick={ search }>{ textButton }</button>
  </div> 
  )

}

export default ProyectCard