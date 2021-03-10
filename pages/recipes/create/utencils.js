import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import NextButton from '../../../components/NextButton'
import Table from 'react-bootstrap/Table'

const Utencilios = () => {
  return (
    <LayoutUser>
      <p>Utensilios</p>
      <div>
        <Table borderless className='tittleResume'>
          <td>Paso 1</td>
          <button>Delete</button>
        </Table>
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
