import React, { useState, useEffect, useRef } from 'react'
import LayoutUser from '../../../components/LayoutUser'

import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'

import { productsRequest } from '../../../services/product'

const Ingredients = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await productsRequest()
    const responseJSON = await response.json()
    return responseJSON.data
  }
  useEffect(async () => {
    const productsAll = await getProducts()
    console.log(productsAll)
    setProducts(productsAll)
  }, [])
  const handleClickOption = (e) => {
    console.log(e.target.value)
  }
  const handleChangeInput = (e) => {
    console.log('input')
    console.log(e.target.value)
  }
  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label for=''>Ingrediente</label>
                <input type='text' list='products' onChange={handleChangeInput} placeholder='Ingrediente' name='' id='' />
                <datalist id='products'>
                  {
                    products.map(product => (<option key={product._id} value={product._id}>{product.name}</option>))
                  }
                </datalist>
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso Bruto</label>
                <input type='text' placeholder='Peso bruto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ 9</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>- </p>
              </div>
              <button className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>

        <form>
          <div className='form-input'>
            <p>Agregar Subreceta</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label for=''>Subreceta</label>
                <input type='text' placeholder='Ingrediente' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso bruto</label>
                <input type='text' placeholder='Peso bruto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ 11</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>- </p>
              </div>
              <button className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>
        <div>
          <Table borderless className='tittleTable'>
            <div className='resumeIngredientSteps'>
              <td>Ingrediente</td>
              <td>Peso Bruto</td>
              <td>Peso neto</td>
              <td>Costo unitario</td>
              <td>U. M.</td>
              <td>Importe</td>
            </div>
          </Table>
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>
        <div>
          <ShowIngredient />
        </div>

        <div className='importStyle d-flex justify-content-between align-items-end'>
          <p>Importe</p>
          <p href=''>$ 45</p>
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

export default Ingredients
