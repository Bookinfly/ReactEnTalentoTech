import React, { Profiler } from 'react'
import Header from "./components/Header"
import MainCart from "./components/MainCart"
import Footer from "./components/Footer"
import Cart from './components/Cart'
import About from './components/About'
import Contact from './components/Contact'
import Cookies from './components/cookies'
import Politicas from './components/Politicas'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<MainCart />} />{/**va a haber que pasar datos por la ruta */}
        <Route path='/cart' element={<Cart />} />{/**Problemas con los props del cart*/}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/politicas' element={<Politicas />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
