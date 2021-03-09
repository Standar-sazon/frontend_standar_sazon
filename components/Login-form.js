import React from 'react'

const loginForm = () => {
  return (
    <div className='create-form-wrapper'>
      <div className='form-group'>
        <div className='single-divider'>
          <div className='form-input'>
            <label for=''>Email*</label>
            <input type='email' placeholder='Correo electronico' name='' id='' />
          </div>
          <div className='form-input'>
            <label for=''>Contraseña*</label>
            <input type='password' placeholder='Escribe tu contraseña' name='' id='' />
          </div>
        </div>
        <button className='create-button'>Inicia sesión</button>
      </div>
    </div>
  )
}

export default loginForm
