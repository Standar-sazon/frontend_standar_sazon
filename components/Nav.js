import React from 'react'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import Logo from '../public/logo.svg'

const navBar = () => {
  return (
    <div>
      <Navbar className='nav-style d-md-flex px-4-lg' expand='lg'>
        <img src={Logo} alt='logo' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='link-style m-auto'>
            <Nav.Link href='#beneficios'>Beneficios</Nav.Link>
            <Nav.Link href='#como-funciona'>¿Cómo funciona?</Nav.Link>
            <Nav.Link href='#planes'>Planes</Nav.Link>
            <Nav.Link className='link-account' href='#crear-cuenta'>Crear cuenta</Nav.Link>
          </Nav>
          <Form inline>
            <Button>Iniciar Sesión</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navBar
