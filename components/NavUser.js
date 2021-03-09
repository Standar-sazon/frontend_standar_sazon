import React from 'react'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import LogoUser from '../public/logounited.svg'

const navProfile = () => {
  return (
    <div>
      <Navbar className='nav-style d-md-flex px-4-lg' expand='lg'>
        <img className='logo-united' src={LogoUser} alt='logo' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='link-style m-auto'>
            <Nav.Link href='#Recetas'>Mis recetas</Nav.Link>
            <Nav.Link href='#Profile'>Crear receta</Nav.Link>
            <Nav.Link href='#Profile'>Glosario</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant='outline-dark'>Cerrar sesión</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navProfile
