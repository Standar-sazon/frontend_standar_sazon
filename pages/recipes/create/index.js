import LayoutUser from '../../../components/LayoutUser'
import NextButton from '../../../components/NextButton'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required()
})

export default function App () {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const onSubmit = data => console.log(data)
  const errorClassName = errors.name ? 'error' : null
  const errorClasscategory = errors.category ? 'error' : null
  return (
    <LayoutUser>
      <form className='create-form-init' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='first-data text-center'>Primeros datos</h1>
        <div className='d-flex flex-column flex-lg-row justify-content-between w-100 mt-5'>
          <div className='form-input'>
            <label for=''>Nombre de la Receta*</label>
            <input name='name' ref={register} className='input' type='text' placeholder='Escribe el nombre de la receta' />
          </div>
          <div className='form-input'>
            <label for=''>Clasificación*</label>
            <select className='input' name='category' ref={register}>
              <option selected>Clasificación del platillo</option>
              <option value='Entrada'>Entrada</option>
              <option value='Sopa'>Sopa</option>
              <option value='Plato Fuerte'>Plato fuerte</option>
              <option value='Postre'>Postre</option>
              <option value='Bebida'>Bebida</option>
              <option value='Salsa'>Salsa</option>
            </select>
          </div>
        </div>
        <div className='d-flex flex-column flex-lg-row justify-content-between mt-lg-5'>
          <div className='form-input'>
            <label for=''>Fecha*</label>
            <input className='input' ref={register} type='date' placeholder='Captura la fecha' name='date' id='' />
          </div>
          <p className='classific-text text-center mt-3'>*Elige entre nuestras categorías, la que más se ajunte al platillo que deseas preparar.</p>
        </div>
        <div className='d-flex justify-content-center text-align-center'>
          <div className='col-12 col-lg-4'>
            <NextButton message='Siguiente' />
          </div>
        </div>
      </form>
    </LayoutUser>
  )
}
