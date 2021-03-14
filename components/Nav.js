import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import Logo from '../public/logo.svg'

const navBar = () => {
  const router = useRouter()
  return (
    <div>
      <Navbar className='nav-style d-md-flex px-4-lg' expand='lg'>
        <Link href='/'>
          <a>
            <img src={Logo} alt='logo' />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='link-style m-auto'>
            <Nav.Link href='#section-benefits'>Beneficios</Nav.Link>
            <Nav.Link href='#section-how-works'>¿Cómo funciona?</Nav.Link>
            <Nav.Link href='#section-plans'>Planes</Nav.Link>
            <Nav.Link className='link-account' href='/create'>Crear cuenta</Nav.Link>
          </Nav>
          <Form className='form-nav' inline>
            <Button onClick={() => router.push('/login')}>Iniciar Sesión</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navBar
