import LayoutUser from '../../components/LayoutUser'
import React from 'react'

const SubRecipes = () => {
  return (
    <LayoutUser>
      <form className='create-form-init'>
        <h1 className='first-data text-center'>Primeros datos</h1>
        <div className='d-flex flex-column flex-lg-row justify-content-between w-100 mt-5'>
          <div className='form-input'>
            <label for=''>Nombre de la Receta*</label>
            <input className='input' type='text' placeholder='Escribe el nombre de la receta' />
          </div>
          <div className='form-input'>
            <label for=''>Clasificación*</label>
            <select className='input'>
              <option selected>Clasificación del platillo</option>
              <option>Entrada</option>
              <option>Sopa</option>
              <option>Plato fuerte</option>
              <option>Postre</option>
              <option>Bebida</option>
              <option>Salsa</option>
            </select>
          </div>
        </div>
        <div className='d-flex flex-column flex-lg-row justify-content-between mt-lg-5'>
          <div className='form-input'>
            <label for=''>Fecha*</label>
            <input className='input' type='date' placeholder='Captura la fecha' name='' id='' />
          </div>
          <p className='classific-text text-center mt-3'>*Elige entre nuestras categorías, la que más se ajunte al platillo que deseas preparar.</p>
        </div>
      </form>
    </LayoutUser>
  )
}
export default SubRecipes
