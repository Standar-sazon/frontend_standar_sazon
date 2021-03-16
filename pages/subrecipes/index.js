import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import NextButton from '../../components/NextButton'

const SubRecipes = () => {
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
export default SubRecipes
