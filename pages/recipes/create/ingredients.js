import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import Table from 'react-bootstrap/Table'
import Onion from '../../../public/onion.png'
import NextButton from '../../../components/NextButton'

const Ingredients = () => {
  return (
    <LayoutUser>
      <div>
        <div>
          <div>
            <p>Agregar ingrediente</p>
            <div className='form-input'>
              <label for=''>Ingrediente</label>
              <div className='form-input'>
                <input type='text' placeholder='Ingrediente' name='' id='' />
              </div>
              <label for=''>Peso neto</label>
              <div>
                <input type='text' placeholder='Peso neto' name='' id='' />
              </div>
              <label for=''>Peso bruto</label>
              <div>
                <input type='text' placeholder='Peso bruto' name='' id='' />
              </div>
            </div>
          </div>
        </div>
        <div className='input3'>
          <div className=''>
            <p>Agregar subreceta</p>
            <div className='form-input'>
              <label for=''>Ingrediente</label>
              <input type='text' placeholder='Ingrediente' name='' id='' />
              <label for=''>Ingrediente</label>
              <input type='text' placeholder='Ingrediente' name='' id='' />
              <label for=''>Ingrediente</label>
              <input type='text' placeholder='Ingrediente' name='' id='' />
            </div>
          </div>
        </div>
      </div>

      <Table borderless className='tittleTable'>
        <td>Ingrediente</td>
        <td>Peso Bruto</td>
        <td>Peso neto</td>
        <td>Costo unitario</td>
        <td>U. M.</td>
        <td>Importe</td>
      </Table>

      <Table borderless className='tittleResume'>
        <img src={Onion} alt='imagen ingrediente' />
        <td>Ingrediente</td>
        <td>Peso Bruto</td>
        <td>Peso neto</td>
        <td>Costo unitario</td>
        <td>U. M.</td>
        <td>Importe</td>
        <button className='deletebutton'>X</button>
      </Table>
      <div className='row justify-content-center'>
        <div className='col-12 col-lg-4'>
          <NextButton message='Siguiente' />
        </div>
      </div>
    </LayoutUser>
  )
}

export default Ingredients
