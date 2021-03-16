import React from 'react'
import { useRouter } from 'next/router'

const createForm = () => {
  const router = useRouter()
  return (
    <div className='create-form-wrapper'>
      <div className='form-group'>
        <div className='divider-left'>
          <div className='form-input'>
            <label for=''>Nombre*</label>
            <input type='text' placeholder='Escribe tu(s) nombre(s)' name='' id='' />
          </div>
          <div className='form-input'>
            <label for=''>Apellidos*</label>
            <input type='text' placeholder='Escribe tu(s) apellido(s)' name='' id='' />
          </div>
          <div className='form-input'>
            <label for=''>Email*</label>
            <input type='email' placeholder='Correo electronico' name='' id='' />
          </div>
        </div>
        <div className='divider-right'>
          <div className='form-input'>
            <label for=''>Ciudad*</label>
            <input type='text' placeholder='¿De donde eres?' name='' id='' />
          </div>
          <div className='form-input'>
            <label for=''>Contraseña*</label>
            <input type='password' placeholder='Escribe tu contraseña' name='' id='' />
          </div>
          <div className='form-input'>
            <label for=''>Confirmar contraseña*</label>
            <input type='password' placeholder='Confirma tu contraseña' name='' id='' />
          </div>
        </div>
        <button className='create-button' onClick={() => router.push('/login')}>Crear cuenta</button>
      </div>
    </div>
  )
}

export default createForm
