import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import NextButton from '../../components/NextButton'
import UtencilsButtons from '../../components/UtencilsButton'
import TableStepsRecipe from '../../components/TableStepsRecipe'
import AddUtencil from '../../components/AddUtencil'

const Utencilios = () => {
  return (
    <LayoutUser>
      <form className='allUtencils'>
        <p>Utensilios</p>
        <div className='d-flex flex-row justify-content-between'>
          <input type='checkbox' id='olla02' value='olla_check'>
            <UtencilsButtons message='olla' color='green' />
          </input>
          <input type='checkbox' id='cuchillo03' value='cuchillo_check'>
            <UtencilsButtons message='cuchillo' color='orange' />
          </input>
          <input type='checkbox' id='budinera04' value='budinera_check'>
            <UtencilsButtons message='budinera' color='green' />
          </input>
          <input type='checkbox' id='tabla05' value='tabla_check'>
            <UtencilsButtons message='tabla' color='orange' />
          </input>
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <input type='checkbox' id='licuadora06' value='licuadora_check'>
            <UtencilsButtons message='licuadora' color='orange' />
          </input>
          <input type='checkbox' id='freidora07' value='freidora_check'>
            <UtencilsButtons message='freidora' color='green' />
          </input>
          <input type='checkbox' id='pala08' value='pala_check'>
            <UtencilsButtons message='pala' color='orange' />
          </input>
          <input type='checkbox' id='soplete09' value='soplete_check'>
            <UtencilsButtons message='soplete' color='green' />
          </input>
          <input type='checkbox' id='cucharon10' value='cucharon_check'>
            <UtencilsButtons message='cucharón' color='orange' />
          </input>
        </div>
        <div className='labelUtencils d-flex flex-row justify-content-between'>
          <input type='checkbox' id='atomizador11' value='atomizador_check'>
            <UtencilsButtons message='atomizador' color='orange' />
          </input>
          <input type='checkbox' id='bowl12' value='bowl_check'>
            <UtencilsButtons message='bowl' color='green' />
          </input>
          <input type='checkbox' id='rallador13' value='rallador_check'>
            <UtencilsButtons message='rallador' color='orange' />
          </input>
          <input type='checkbox' id='espatula14' value='espatula_check'>
            <UtencilsButtons message='espatula' color='green' />
          </input>
          <input type='checkbox' id='colador15' value='colador_check'>
            <UtencilsButtons message='colador' color='orange' />
          </input>
        </div>
        <div>
          <AddUtencil />
        </div>
        <div>
          <p>Escribe tus instrucciones</p>
          <form className='card-table'>
            <div>
              <div>
                <div>
                  <div className='form-input d-flex flex-row'>
                    <input className='inputStep' type='textbox' placeholder='Pasos a seguir' name='' id='' />
                    <div className=''>
                      <button className='plusbutton'>+</button>
                    </div>
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
      </form>
    </LayoutUser>
  )
}

export default Utencilios
