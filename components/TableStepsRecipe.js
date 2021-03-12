import React from 'react'
import Table from 'react-bootstrap/Table'

const TableStepsRecipe = ({ message }) => (
  <div className='tittleResume'>
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
