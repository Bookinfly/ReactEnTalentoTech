import React, { Profiler } from 'react'//ya no recuerdo que era Profiler revisar
import Header from "./components/Header"
import MainCart from "./components/MainCart"
import Footer from "./components/Footer"
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import Cookies from './components/cookies'
import Politicas from './components/Politicas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/CartContext'
import ProductoDetalle from './components/ProductoDetalle'


function App() {


  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path='/' element={<MainCart />} />{/**va a haber que pasar datos por la ruta */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/politicas' element={<Politicas />} />
        <Route path='/detalle/:id' element={<ProductoDetalle />} />
      </Routes>
      <Footer />
    </CartProvider>
  )
}

export default App
