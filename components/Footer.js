import React from 'react'
import LOGO from '../public/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className='all-footer'>
        <img className='images-footer-1' src={LOGO} alt='LOGO' />
        <nav>
          <ul className='container-footer'>
            <li><a href=''>Beneficios</a></li>
            <li className='my-2'><a href=''>¿Cómo funciona?</a></li>
            <li><a href=''>Planes</a></li>
          </ul>
        </nav>
        <div className='item-info'>
          <p>Información</p>
          <p>+ 52 55 6474 5613</p>
          <p>dmgs.mx@gmail.com</p>
        </div>

      </div>
      <div className='privacidad'>
        <p>© 2021 Standar & Sazón </p>
        <p>Aviso de privacidad</p>
      </div>
    </footer>

  )
}

export default Footer
