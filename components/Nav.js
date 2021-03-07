import React from 'react'
import LOGO from '../public/img/Logo Divided.svg'

export default function Nav () {
  return (
    <nav className='menu_nav'>
      <img src={LOGO} alt='logo' className='img_logo' />
      <div className='menu'>
        <a href=''>Beneficios</a>
        <a href=''>Cómo funciona</a>
        <a href=''>Planes</a>
        <a href=''>Crear cuenta</a>
      </div>
      <button className='btn-singin'>Iniciar sesión</button>
    </nav>
  )
}
