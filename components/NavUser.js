import React from 'react'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import LogoUser from '../public/logounited.svg'
import ProfilePic from '../public/userpic.png'
import Book from '../public/glosaryicon.svg'
import Add from '../public/addicon.svg'
import Saved from '../public/rectetasicon.svg'

const navProfile = () => {
  return (
    <div>
      <Navbar className='nav-style d-md-flex px-4-lg' expand='lg'>
        <img className='logo-united' src={LogoUser} alt='logo' />
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='link-style m-auto'>
            <div className='profile-card'>
              <h3 className='greeting'>¡Bienvenida!</h3>
              <span><img src={ProfilePic} alt='' /></span>
              <span className='color-divider' />
              <span className='orange-card-footer'>
                <p className='user-name'>Nombre de usuario</p>
                <p className='account-footer'>Tipo de cuenta</p>
              </span>
            </div>
            <Nav.Link className='d-lg-none' href='#Recetas'>Mis recetas <span className='nav-icon'><img src={Saved} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Agregar'>Crear receta <span className='nav-icon'><img src={Add} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Subreceta'>Crear subreceta <span className='nav-icon'><img src={Add} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Glosario'>Glosario <span className='nav-icon'><img src={Book} alt='' /></span> </Nav.Link>
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
