import React from 'react'
import Table from 'react-bootstrap/Table'

const TableStepsRecipe = ({ message }) => (
  <div className='tablesStepsResume'>
    <Table borderless>
      <td>{message}</td>
      <button className='deletebutton'>X</button>
    </Table>
  </div>
)

TableStepsRecipe.defaultProps = {
  message: 'Aceptar'
}

export default TableStepsRecipe
