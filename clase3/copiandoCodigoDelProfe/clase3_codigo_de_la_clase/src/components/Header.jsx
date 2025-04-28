import { Navbar } from "react-bootstrap";

function Header({usuario, tipo}){
  return(
    <Navbar bg="dark" ClassName="px-3">
      <Navbar.Brand>Proyecto Talento 2025</Navbar.Brand>

      <Navbar.Text ClassName="text-white">
        {tipo}-{usuario}
      </Navbar.Text>
    </Navbar>
  )
}

export default Header