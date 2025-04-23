import React from "react"

const Team = ( { staff } ) => {
  return (
    <div>
      { staff.map((member, index)=> {
      const { nombre, rol, imagen } = member 

      return (
        <div key={index} style={ {display:"flex", width:"80vw", margin:"auto", boxSizing: "border-box", border:"2px black solid", padding:"20px", backgroundColor:"gray" }}>
          <h2>{rol}</h2>
          <figure>
            <img src={imagen} alt={`Foto de ${nombre}`} style={{ width:"300px"}}/>
            <figcaption>{nombre}</figcaption>
          </figure>
        </div>
        )
      })}
    </div>
  )
}

  export default Team
