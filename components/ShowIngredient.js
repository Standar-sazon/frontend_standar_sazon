import React from 'react'
import Table from 'react-bootstrap/Table'
import Onion from '../public/onion.png'

const ShowIngredient = () => {
  return (
    <div>
      <Table borderless className='tittleResume'>
        <img src={Onion} alt='imagen ingrediente' />
        <td>Ingrediente</td>
        <td>Peso Bruto</td>
        <td>Peso neto</td>
        <td>Costo unitario</td>
        <td>U. M.</td>
        <td>Importe</td>
        <div>
          <button className='deletebutton'>X</button>
        </div>

      </Table>
    </div>
  )
}

export default ShowIngredient
