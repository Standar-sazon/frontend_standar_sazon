import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import ARROW_BLACK from '../../public/img/arrowblack.svg'
import ARROW_GRAY from '../../public/img/arrowgray.svg'

const SubRecipes = () => {
  return (
    <LayoutUser>
      <div className='create-form-init d-flex justify-content-center align-items-center flex-column '>
        <h1 className='first-data'>Primeros datos</h1>
        <div className='from-data input1 d-flex flex-column '>
          <label for=''>Nombre de la Receta*</label>
          <input className='input' type='text' placeholder='Escribe el nombre de la receta' />
        </div>
        <div className='from-data input2  d-flex flex-column'>
          <label for=''>Clasificación</label>
          <select className='input'>
            <option selected>Clasificación del platillo</option>
            <option>Entrada</option>
            <option>Sopa</option>
            <option>Plato fuerte</option>
            <option>Postre</option>
            <option>Bebida</option>
            <option>Salsa</option>
          </select>
          <p className='classific-text text-center'>*Elige entre nuestras categorías, la que más se ajunte al platillo que deseas preparar.</p>
          <img src={ARROW_GRAY} alt='logo' className='arrowgray' />
        </div>
        <div className='from-data input3 d-flex flex-column'>
          <label for=''>Fecha</label>
          <input className='input' type='date' placeholder='Captura la fecha' name='' id='' />
        </div>
        <div className='from-data d-flex felex-column'>
          <button className='next-button'>Siguiente</button>
          <img src={ARROW_BLACK} alt='logo' className='arrowblack' />
        </div>
      </div>
    </LayoutUser>
  )
}

export default SubRecipes
