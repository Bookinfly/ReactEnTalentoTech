//DEBO CABIAR LOS NOMBRES
//NO ES SOLO EL CARRITO, SINO EL CATÁLOGO CON EL CARRITO

import { createContext, useContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Creamos el componente proveedor del contexto
export const CartProvider = ({ children }) => {
  // Estado inicial: intentamos cargar desde localStorage
  const [cartData, setCartData] = useState(() => {
    const saved = localStorage.getItem('cartData');
    return saved ? JSON.parse(saved) : { listOfItems: [], cantItems: [], total: 0 };//???
  });

  // 3. Guardamos en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  // 4. Devolvemos el proveedor con los valores
  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. Creamos un hook personalizado para usar más fácil el contexto
export const useCart = () => useContext(CartContext);
