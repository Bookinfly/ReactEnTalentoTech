import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi"
import { FiX } from "react-icons/fi"


const Header = ()=> {

  const [visible, setVisible] = useState("-270px")

  const verDesplegable = ()=> {
    visible === "-270px"? setVisible("60px"): setVisible("-270px")
  }

  const salirDesplegable = ()=> {
    setVisible !== "-270" && setVisible("-270px")
  }

  return (
    <header className="header"  onMouseLeave={salirDesplegable}>
      <Link to="/" className="header__link"><img src="./images/logo.png" alt="logo" style={{width:"60px"}} className="header__linl--logo"/></Link> {/*revisar clase*/}
      <div className="header__box">
        <nav className="header__box__nav">
          <ul className="header__box__nav__ul">
            <li className="header__box__nav__ul--link"><Link to="./">Productos</Link></li>
            <li className="header__box__nav__ul--link"><Link to="./about">Nosotros</Link></li>
            <li className="header__box__nav__ul--link"><Link to="./contact">Contacto</Link></li>
            <li className="header__box__nav__ul--link"><Link to="./loguin">Login</Link></li>
          </ul>
        </nav>

        <Link to="/cart" className="header__box__link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width:"40px"}} className="header__box__link--cart">
            {/*<!-- !Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. -->*/}
            <path fill="#fbdfa3" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
        </Link>
      </div>
      <div className="header--mobile">
        <FiMenu size={30} color="#fbdfa2" className="incon--menu" onClick={verDesplegable}/>
        <div className="header--mobile__links" style={{top:visible}} >
          <ul>
            <li ><Link to="./" onClick={verDesplegable}>Home</Link></li>
            <li ><Link to="./about"  onClick={verDesplegable}>Nosotros</Link></li>
            <li ><Link to="./contact" onClick={verDesplegable}>Contacto</Link></li>
            <li ><Link to="./loguin" onClick={verDesplegable}>Login</Link></li>
            <li ><Link to="./cart" onClick={verDesplegable}>Carrito</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header