import { useState, useEffect } from "react";
import { useCart } from "./context/CartContext";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

export default function AllProductos() {
  const { cartData, setCartData } = useCart();

  const productosPorPagina = 5; // productos por página para paginación
  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  // Filtrar productos cuando cambia filtro o listado de productos
  useEffect(() => {
    const filtrados = cartData.listOfItems
      .map((producto, index) => ({ ...producto, index }))
      .filter((producto) =>
        producto.name.toLowerCase().includes(filtro.toLowerCase())
      );
    setProductosFiltrados(filtrados);
    setPaginaActual(1); // resetear a página 1 al cambiar filtro
  }, [filtro, cartData.listOfItems]);

  // Calcular productos para la página actual
  const indiceUltimoProducto = paginaActual * productosPorPagina;
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina;
  const productosPaginados = productosFiltrados.slice(
    indicePrimerProducto,
    indiceUltimoProducto
  );

  // Funciones para sumar/restar cantidad con clonación correcta del array
  const suma = (index) => {
    const temp = {
      ...cartData,
      cantItems: [...cartData.cantItems],
    };
    temp.cantItems[index] += 1;
    setCartData(temp);
  };

  const resta = (index) => {
    const temp = {
      ...cartData,
      cantItems: [...cartData.cantItems],
    };
    if (temp.cantItems[index] > 0) temp.cantItems[index] -= 1;
    setCartData(temp);
  };

  // Actualizar total cuando cambian las cantidades
  useEffect(() => {
    const nuevoTotal = cartData.listOfItems.reduce((acc, item, i) => {
      return acc + item.price * cartData.cantItems[i];
    }, 0);

    const totalRedondeado = parseFloat(nuevoTotal.toFixed(2));

    if (cartData.total !== totalRedondeado) {
      setCartData((prev) => ({
        ...prev,
        total: totalRedondeado,
      }));
    }
  }, [JSON.stringify(cartData.cantItems), cartData.listOfItems, setCartData]);

  // Cambiar página
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);
  const cambiarPagina = (num) => setPaginaActual(num);

  return (
    <div>
      <Buscador onFiltrar={setFiltro} />

      <div className="main__section__products__list">
        {productosPaginados.map((item) => (
          <div key={item.index} className="main__section__products__list--card">
            <figure className="card__figure">
              <img src={item.image} alt={item.name} className="card__figure--img" />
            </figure>
            <h3 className="card--name">{item.name}</h3>
            <p className="card--des">{item.description}</p>
            <h4 className="card--price">${item.price}</h4>
            <Link to={`/detalle/${item.id}`} className="button-link">
              Ver Detalle
            </Link>

            <div className="card__box">
              <button onClick={() => resta(item.index)} className="card__box--button2">
                -
              </button>
              <span className="card__box--cant">{`Unidades ${cartData.cantItems[item.index]}`}</span>
              <span className="card__box--precio">{`Total $${(
                cartData.cantItems[item.index] * item.price
              ).toFixed(2)}`}</span>
              <button onClick={() => suma(item.index)} className="card__box--button1">
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginador simple */}
      <div className="paginador" style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => cambiarPagina(num)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              cursor: "pointer",
              backgroundColor: num === paginaActual ? "#e85604" : "#fff",
              color: num === paginaActual ? "#fff" : "#e85604",
              border: "1px solid #e85604",
              borderRadius: "4px",
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Total y link al carrito */}
      <div className="main__section__products__div" style={{ marginTop: "30px" }}>
        <span className="main__section__products__div--price">
          Carrito por un total de ${cartData.total.toFixed(2)}
        </span>
        <Link to={"/cart"} className="button-link main__section__products__div--link">
          Ir al carrito
        </Link>
      </div>
    </div>
  );
}
