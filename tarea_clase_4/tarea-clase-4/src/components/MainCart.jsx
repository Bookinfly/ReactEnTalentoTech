// Componente principal del catálogo: renderiza cabecera + AllProductos

import React, { useState, useEffect } from "react";
import { useCart } from './context/CartContext';
import { Helmet } from "react-helmet-async";
import AllProductos from "./AllProductos";

const MainCart = () => {
  const { cartData, setCartData } = useCart();
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Se ejecuta al montar: si no hay productos en el carrito, los pide desde la API
  useEffect(() => {
    if (cartData.listOfItems.length === 0) {
      fetch("https://682966586075e87073a662a1.mockapi.io/productos/catalog")
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          if (Array.isArray(datos) && datos.length > 0) {
            const cantidadesPrevias = datos.map(() => 0); // una cantidad por cada producto
            setCartData({
              listOfItems: datos,
              cantItems: cantidadesPrevias,
              total: 0
            });
          } else {
            setError("No se encontraron productos.");
          }
        })
        .catch((err) => {
          console.error("Error: ", err);
          setError("Problema con la carga de productos.");
        })
        .finally(() => setCargando(false));
    } else {
      setCargando(false);
    }
  }, []);

  // Mensaje de carga
  if (cargando) return <p style={{ backgroundColor: "#e85604", fontWeight: "bold", color: "#135f83" }}>Cargando productos...🚛</p>;

  // Mensaje de error
  if (error) return (
    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/005/664/718/original/plug-error-disconnected-cable-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" style={{width:'100vw'}} alt="Error" />
      <p style={{ backgroundColor: "#e85604", fontWeight: "bold", color: "#135f83" }}>Error: {error}</p>
    </div>
  );

  // Render principal
  return (
    <main className="main">
      <Helmet>
        <title>Catálogo de CrazyMarklet</title>
        <meta name="description" content="electrodomésticos, decoración y utensillos con los mejores precios" />
      </Helmet>

      <section className="main__section">
        <h1 className="main__section__title">Crazy <span className="main__section__title--mod">MARKET</span></h1>
        <h2 className="main__section__subtitle">Ofertas de otro mundo</h2>
        <figure className="main__section__figure--logo">
          <img src="./images/logo.png" alt="logo CrazyMARKET" className="main__section__figure__img--logo" />
        </figure>
        <div className="main__section__div">
          <figure className="main__section__figure">
            <img src="./images/woman.png" alt="Mujer usando su móvil desde el sofá" className="main__section__figure__image" />
          </figure>
          <h3 className="main__section__h3">Olvida la fila del super!!!</h3>
        </div>
      </section>

      <section className="main__section">
        {cartData.listOfItems.length > 0 ? <AllProductos /> : <p style={{ fontWeight: "bold", color: "#e85604" }}>No hay productos disponibles por el momento.</p>}
      </section>
    </main>
  );
};

export default MainCart;