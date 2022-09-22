import {Container, Navbar, Nav} from "react-bootstrap"
import CartWidget from "./CartWidget";
import './CartWidget.css'

const NavBar= () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Transportes Thames
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Nuestros Vehiculos</Nav.Link>
            <Nav.Link href="#pricing">Cotizaciones</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    )
}

export default NavBar;