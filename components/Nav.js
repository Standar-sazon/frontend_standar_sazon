import { Alert } from 'bootstrap';
import React from 'react'
import { Form,Container, Navbar, Nav, Button,} from 'react-bootstrap';



const NavBarWeb = () => {
  return (
    <Navbar expand= "xxl" className= "navBarColor">
      <Container>
        <Navbar.Brand href="#home">
         <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Standar-sazón"
        />
       </Navbar.Brand>
        <Nav className="mr-auto, ">
        <Nav.Link.Link  href="#">Beneficios</Nav.Link.Link>
         <Nav.Link href="#">¿Cómo funciona?</Nav.Link>
          <Nav.Link.Link href="#">Planes</Nav.Link.Link>
          <Nav.Link.Link href ="#"> Crear cuenta</Nav.Link.Link>
       </Nav>
       <Form inline>
       <Button className="buttonNavBar, styleLetterButton" variant= "warning">Iniciar sesión</Button>
       </Form> 
      </Container>
    </Navbar> 
  )
}

export default NavBarWeb

