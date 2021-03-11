import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import NextButton from '../../../components/NextButton'
import Table from 'react-bootstrap/Table'

const Utencilios = () => {
  return (
    <LayoutUser>
      <p>Utensilios</p>
      <div>
        <button className='buttonorange'>Olla express</button>
      </div>
      <div>
        <p>Escribe tus instrucciones</p>

        <form className=''>
          <div className='card-table'>
            <div className='form-input'>
              <input type='text' placeholder='Pasos a seguir' name='' id='' />
              <div className='d-flex justify-content-around'>
                <button className='plusbutton'>+</button>
              </div>
            </div>
            <div className='tittleResume'>
              <Table borderless>
                <td>Paso 1</td>
                <button className='deletebutton'>X</button>
              </Table>
            </div>
          </div>
        </form>
      </div>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-4'>
          <NextButton message='Siguiente' />
        </div>
      </div>
    </LayoutUser>
  )
}

export default Utencilios
