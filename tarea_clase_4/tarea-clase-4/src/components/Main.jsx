import React, { useEffect, useState } from "react";
import Products from "./Products";

// Lista de productos de ejemplo
// let listItems = [
//   { producto: "leche", precio: 1 },
//   { producto: "azúcar", precio: 1.2 },
//   { producto: "galletitas", precio: 2 },
//   { producto: "café", precio: 3 },
//   { producto: "arroz", precio: 2 },
//   { producto: "jugo", precio: 0.5 },
//   { producto: "gaseosa", precio: 1 },
// ];

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://682966586075e87073a662a1.mockapi.io/productos/catalog") // Problemas con el catch de error
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error: ", error);
        setError("Problema con la carga de productos");
        setCargando(false);
      });
  }, []);

  if (cargando)
    return (
      <p style={{ backgroundColor: "#e85604", fontWeight: "bold", color: "#135f83" }}>
        Cargando productos...🚛
      </p>
    );

  if (error)
    return (
      <p style={{ backgroundColor: "#e85604", fontWeight: "bold", color: "#135f83" }}>
        Error: {error}
      </p>
    );

  return (
    <main className="main">
      <section className="main__section">
        <h1 className="main__section__title">
          Crazy <span className="main__section__title--mod">MARKET</span>
        </h1>
        <h2 className="main__section__subtitle">Ofertas de otro mundo</h2>
        <figure className="main__section__figure--logo">
          <img
            src="./images/logo.png"
            alt="logo CrazyMARKET"
            className="main__section__figure__img--logo"
          />
        </figure>
        <div className="main__section__div">
          <figure className="main__section__figure">
            <img
              src="./images/woman.png"
              alt="Mujer usando su móvil desde el sofá"
              style={{ minWidth: "200px", maxWidth: "35vw" }}
              className="main__section__figure__image"
            />
          </figure>
          <h3 className="main__section__h3">Olvida la fila del super!!!</h3>
        </div>
      </section>
      <section className="main__section">
        <Products listItems={productos} />
      </section>
    </main>
  );
};

export default Main;
