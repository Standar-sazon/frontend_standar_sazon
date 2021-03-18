import React, { useState, useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LayoutUser from '../../../components/LayoutUser'

import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'

import { productsRequest } from '../../../services/product'

const schema = yup.object().shape({
  ingredient: yup.string().required('El campo es requerido'),
  grossWeight: yup.number().min(1, 'Requerido').positive('Invalido').required('Requerido').typeError('Invalido'),
  netWeight: yup.number().min(1, 'Requerido').positive('Invalido').required('Requerido').typeError('Invalido')
})

const Ingredients = () => {
  const [products, setProducts] = useState([])
  const [ingredient, setIngredient] = useState('')
  const [valueProductSelected, setValueProductSelected] = useState({})
  const [ingredients, setIngredients] = useState([])

  const { register, handleSubmit, getValues, setValue, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

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

  const handleChangeInput = (e) => {
    console.log(e.target.value)
    const productFiltered = products.filter(product => product.name === e.target.value)
    console.log(productFiltered)
    const { grossWeight, netWeight } = getValues()
    setValueProductSelected({
      product: productFiltered[0]?._id,
      priceUnit: productFiltered[0]?.priceUnit,
      measureByBuy: productFiltered[0]?.measureByBuy,
      image: productFiltered[0]?.image,
      grossWeight,
      netWeight
    })
    console.log(valueProductSelected)
  }
  const handleAddIngredient = ({ grossWeight, netWeight }) => {
    setValueProductSelected({ ...valueProductSelected, grossWeight, netWeight })
    console.log(valueProductSelected)
    setIngredients([...ingredients, valueProductSelected])
    // setValueProductSelected({})
    // setIngredient('')
    setValue('ingredient', '')
    setValue('grossWeight', '')
    setValue('netWeight', '')
  }
  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form onSubmit={handleSubmit(handleAddIngredient)}>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label for=''>Ingrediente</label>
                <input type='text' list='products' onChange={handleChangeInput} ref={register} placeholder='Ingrediente' name='ingredient' id='' />
                <p>{errors.ingredient?.message}</p>
                <datalist id='products'>
                  {
                    products.map(product => (<option key={product._id} data-id={product._id} value={product.name} />))
                  }
                </datalist>
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso Bruto</label>
                <input type='text' placeholder='Peso Bruto' ref={register} name='grossWeight' />
                <p>{errors.grossWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso Neto</label>
                <input type='text' placeholder='Peso Neto' ref={register} name='netWeight' />
                <p>{errors.netWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ {valueProductSelected?.priceUnit}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>- {valueProductSelected?.measureByBuy}</p>
              </div>
              <button className='plusbutton' type='submit'><span>+</span></button>
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
