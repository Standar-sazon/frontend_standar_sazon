import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import NextButton from '../../../components/NextButton'
import UtencilsButtons from '../../../components/UtencilsButton'
import TableStepsRecipe from '../../../components/TableStepsRecipe'
import AddUtencil from '../../../components/AddUtencil'

const Utencilios = () => {
  return (
    <LayoutUser>
      <div className='allUtencils'>
        <p>Utensilios</p>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
          <UtencilsButtons message='Sarten' color='green' />
          <UtencilsButtons message='Sarten' color='orange' />
        </div>
        <div>
          <AddUtencil />
        </div>
        <div>
          <p>Escribe tus instrucciones</p>
          <form className='card-table'>
            <div>
              <div className='form-input'>
                <input type='textbox' placeholder='Pasos a seguir' name='' id='' />
                <div className='d-flex justify-content-around'>
                  <button className='plusbutton'>+</button>
                </div>
                <div>
                  <TableStepsRecipe message='Paso1' />
                </div>
                <div>
                  <TableStepsRecipe message='Paso2' />
                </div>
                <div>
                  <TableStepsRecipe message='Paso 3' />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <NextButton message='Siguiente' />
          </div>
        </div>
      </div>

    </LayoutUser>
  )
}

export default Utencilios
