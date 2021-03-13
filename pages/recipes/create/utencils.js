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
          <UtencilsButtons message='Olla' color='green' />
          <UtencilsButtons message='Cuchillo' color='orange' />
          <UtencilsButtons message='Budinera' color='green' />
          <UtencilsButtons message='Tabla' color='orange' />
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Licuadora' color='orange' />
          <UtencilsButtons message='Freidora' color='green' />
          <UtencilsButtons message='Pala' color='orange' />
          <UtencilsButtons message='Soplete' color='green' />
          <UtencilsButtons message='Cucharón' color='orange' />
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <UtencilsButtons message='Atomizador' color='orange' />
          <UtencilsButtons message='Bowl' color='green' />
          <UtencilsButtons message='Rallador' color='orange' />
          <UtencilsButtons message='Espatula' color='green' />
          <UtencilsButtons message='Colador' color='orange' />
        </div>
        <div>
          <AddUtencil />
        </div>
        <div>
          <p>Escribe tus instrucciones</p>
          <form className='card-table'>
            <div>
              <div>
                <div className='form-input d-flex flex-row'>
                  <input className='inputStep' type='textbox' placeholder='Pasos a seguir' name='' id='' />
                  <div className=''>
                    <button className='plusbutton'>+</button>
                  </div>
                </div>
                <div>
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
