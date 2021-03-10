import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import NextButton from '../../../components/NextButton'
import Table from 'react-bootstrap/Table'
import { Card } from 'react-bootstrap'

const Utencilios = () => {
  return (
    <LayoutUser>
      <p>Utensilios</p>
      <div>
        <button className='buttonorange'>Olla express</button>
      </div>
      <div>
        <button className='buttongreen'>Sarten</button>
        <p>Escribe tus instrucciones</p>
        <Card className='card-table'>
          <div className='form-input'>
            <input type='text' placeholder='Pasos a seguir' name='' id='' />
          </div>
          <Table borderless className='tittleResume'>
            <td>Paso 1</td>
            <button>Delete</button>
          </Table>
        </Card>
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
