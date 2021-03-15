import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { create } from '../services/users'

const schema = yup.object().shape({
  nameform: yup.string().required('El email no es valido').required('El campo es requerido'),
  lastNameform: yup.string().required('El campo es requerido'),
  emailform: yup.string().email('El email no es valido'),
  passwordform: yup.string().required('El campo es requerido').min(8, 'El número de caracteres debe de ser mayor a 8'),
  confirmPasswordform: yup.string().required('El campo es requerido'),
  cityform: yup.string().required('El campo es requerido')
})

export default function App () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const onSubmit = async (dataForm) => {
    setLoading(true)
    console.log('Enviando al server...')
    console.log(dataForm)
    const response = await create(dataForm)
    const responseJSON = await response.json()
    console.log(responseJSON)
    if (!responseJSON.success) {
      setError('Credenciales Invalidas')
      setLoading(true)
      return
    }
    setLoading(true)
    router.push('/login')
    localStorage.setItem('token', responseJSON.data.token)
  }
  const errorClassName = errors.nameform ? 'error' : null
  const errorClasslastName = errors.lastNameform ? 'error' : null
  const errorClassEmail = errors.email ? 'error' : null
  const errorClassPassword = errors.password ? 'error' : null
  const errorClassCity = errors.cityform ? 'error' : null

  return (
    <div className='create-form-wrapper'>
      <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
        <div className='divider-left'>
          <div className='form-input'>
            <label for=''>Nombre*</label>
            <input name='nameform' ref={register} type='text' placeholder='Escribe tu(s) nombre(s)' className={errorClassName} id='' />
            <p>{errors.nameform?.message}</p>
          </div>
          <div className='form-input'>
            <label for=''>Apellidos*</label>
            <input name='lastNameform' ref={register} type='text' placeholder='Escribe tu(s) apellido(s)' className={errorClasslastName} id='' />
            <p>{errors.lastNameform?.message}</p>
          </div>
          <div className='form-input'>
            <label for=''>Email*</label>
            <input name='emailform' ref={register} type='email' placeholder='Correo electronico' className={errorClassEmail} id='' />
            <p>{errors.emailform?.message}</p>
          </div>
        </div>
        <div className='divider-right'>
          <div className='form-input'>
            <label for=''>Ciudad*</label>
            <input name='cityform' ref={register} type='text' placeholder='¿De donde eres?' className={errorClassCity} id='' />
            <p>{errors.cityform?.message}</p>
          </div>
          <div className='form-input'>
            <label for=''>Contraseña*</label>
            <input name='passwordform' ref={register} type='password' placeholder='Escribe tu contraseña' className={errorClassPassword} id='' />
            <p>{errors.password?.message}</p>
          </div>
          <div className='form-input'>
            <label for=''>Confirmar contraseña*</label>
            <input name='confirmPasswordform' ref={register} type='password' placeholder='Confirma tu contraseña' id='' />
          </div>
        </div>
        <button type='submit' className='create-button'>Crear cuenta</button>
      </form>
    </div>
  )
}
