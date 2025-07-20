import React, { Profiler } from 'react'//ya no recuerdo que era Profiler revisar
import Header from "./components/Header"
import MainCart from "./components/MainCart"
import Footer from "./components/Footer"
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import Cookies from './components/cookies'
import Politicas from './components/Politicas'
import Admin from './components/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import { AuthProvider } from './components/context/AuthContext'
import ProductoDetalle from './components/ProductoDetalle'
import Loguin from './components/Loguin'
import RutaProtegida from './components/RutaProtegida'
import { ProductsProvider } from './components/context/ProductsCRUDContext'
import { ToastContainer } from "react-toastify"
import { HelmetProvider } from "react-helmet-async"



function App() {

  return (
    <HelmetProvider>
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<MainCart />} />{/**va a haber que pasar datos por la ruta */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/politicas' element={<Politicas />} />
            <Route path='/detalle/:id' element={<ProductoDetalle />} />
            <Route path='/loguin' element={<Loguin />} />

            <Route path='/cart' element={
              <RutaProtegida >
                <Cart />
              </RutaProtegida>
            }/>

            <Route path='/admin' element={
              <RutaProtegida >
              <Admin />
              </RutaProtegida>
          } />

        </Routes>
        <Footer />
      </ProductsProvider>
    </CartProvider>
    </AuthProvider>
  </HelmetProvider>
  )
}

export default App
