import LayoutUser from '../../components/LayoutUser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import NextButton from '../../components/NextButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createRecipe } from '../../../services/recipes'

const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  category: yup.string().required('Categoria es requerida')
})
export default function App () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const onSubmit = async (dataForm) => {
    setLoading(true)
    const response = await createRecipe(localStorage.getItem('token'), dataForm)
    const responseJSON = await response.json()
    if (!responseJSON.success) {
      setError('')
      setLoading(false)
      return
    }
    setLoading(true)
    router.push({
      pathname: '/recipes/create/ingredients',
      query: { recipe: responseJSON.data._id }
    })
  }
  const errorClassName = errors.name ? 'error' : null
  const errorClassCategory = errors.category ? 'error' : null
  return (
    <LayoutUser>
      <form className='create-form-init'>
        <h1 className='first-data text-center'>Primeros datos</h1>
        <div className='newDataRecipe'>
          <div className='izquierda'>
            <div className='form-input'>
              <label for=''>Nombre de la Receta*</label>
              <input className='input' type='text' placeholder='Escribe el nombre de la receta' />
            </div>
            <div className=''>
              <div className='form-input'>
                <label for=''>Fecha*</label>
                <input className='input' type='date' placeholder='Captura la fecha' name='' id='' />
              </div>
            </div>
          </div>

          <div className='derecha'>
            <div className='form-input'>
              <label for=''>Clasificación*</label>
              <select className=''>
                <option selected>Clasificación del platillo</option>
                <option>Entrada</option>
                <option>Sopa</option>
                <option>Plato fuerte</option>
                <option>Postre</option>
                <option>Bebida</option>
                <option>Salsa</option>
              </select>
            </div>
            <p className=''>*Elige entre nuestras categorías, la que más se ajuste al platillo que deseas preparar.</p>
          </div>
        </div>
        <div>
          <div className='d-flex justify-content-center text-align-center'>
            <div className='col-12 col-lg-4'>
              <NextButton message='Siguiente' />
            </div>
          </div>

        </div>
      </form>
    </LayoutUser>
  )
}
