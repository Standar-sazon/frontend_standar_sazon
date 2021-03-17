import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import LogoUser from '../public/logounited.svg'
import ProfilePic from '../public/userpic.png'
import Book from '../public/glosaryicon.svg'
import Add from '../public/addicon.svg'
import Saved from '../public/rectetasicon.svg'
import { userRequest } from '../services/users'

const navProfile = () => {
  const router = useRouter()
  const [user, setUser] = useState({})

  const getUsers = async () => {
    console.log(localStorage.getItem('token'))
    const response = await userRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    console.log(responseJSON.data)
    return responseJSON.data
  }

  useEffect(async () => {
    const profile = await getUsers()
    console.log(profile)
    setUser(profile)
  }, [])

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
                {/* <p className='user-name'>{user.name} {user.lastName} </p>
                <p className='account-footer'>{user.membership}</p> */}
              </span>
            </div>

            <Nav.Link className='d-lg-none' href='#Recetas'>Mis recetas <span className='nav-icon'><img src={Saved} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Agregar'>Crear receta <span className='nav-icon'><img src={Add} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Subreceta'>Crear subreceta <span className='nav-icon'><img src={Add} alt='' /></span> </Nav.Link>
            <Nav.Link className='d-lg-none' href='#Glosario'>Glosario <span className='nav-icon'><img src={Book} alt='' /></span> </Nav.Link>
          </Nav>
          <Form className='form-nav' inline>
            <Button
              variant='outline-dark' onClick={() => {
                localStorage.removeItem('token')
                router.push('/login')
              }}
            >Cerrar sesión
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navProfile
