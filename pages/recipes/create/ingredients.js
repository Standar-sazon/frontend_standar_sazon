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
  const [valueProductSelected, setValueProductSelected] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [amountTotal, setAmountTotal] = useState(null)

  const { register, handleSubmit, setValue, errors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const watchAllFields = watch()

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

  const getPerformancePercent = (grossWeight, netWeight) => (netWeight * 100) / grossWeight
  const getAmountProduct = (netWeight, priceUnit) => (netWeight * priceUnit).toFixed(2)

  useEffect(() => {
    const performancePercent = getPerformancePercent(parseFloat(watchAllFields.grossWeight), parseFloat(watchAllFields.netWeight))
    const amount = getAmountProduct(parseFloat(watchAllFields.netWeight), valueProductSelected.priceUnit)
    setValueProductSelected({ ...valueProductSelected, grossWeight: parseFloat(watchAllFields.grossWeight), netWeight: parseFloat(watchAllFields.netWeight), performancePercent, amount })
  }, [watchAllFields.grossWeight, watchAllFields.netWeight])

  useEffect(() => {
    const total = ingredients.reduce((accum, ingredient) => { return accum += parseFloat(ingredient.amount) }, 0)
    setAmountTotal(total.toFixed(2))
  }, [ingredients])

  const handleChangeInput = (e) => {
    console.log(e.target.value)
    const productFiltered = products.filter(product => product.name === e.target.value)
    console.log(productFiltered)
    setValueProductSelected({
      product: productFiltered[0]?._id,
      name: productFiltered[0]?.name,
      priceUnit: productFiltered[0]?.priceUnit,
      measureByBuy: productFiltered[0]?.measureByBuy,
      image: productFiltered[0]?.image
    })
    console.log(valueProductSelected)
  }

  const handleAddIngredient = ({ grossWeight, netWeight }) => {
    setValueProductSelected({ ...valueProductSelected })
    console.log(valueProductSelected)
    setIngredients([...ingredients, valueProductSelected])
    setValueProductSelected({})
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
          <div>
            <Table borderless className='tittleTable'>
              <div className='resumeIngredientSteps'>
                <td>Ingrediente</td>
                <td>Peso Bruto</td>
                <td>Peso neto</td>
                <td>Porcentaje</td>
                <td>Costo unitario</td>
                <td>U. M.</td>
                <td>Importe</td>
              </div>
            </Table>
          </div>
          {
          ingredients.length !== 0
            ? (
                ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <ShowIngredient image={ingredient.image} name={ingredient.name} grossWeight={ingredient.grossWeight} netWeight={ingredient.netWeight} priceUnit={ingredient.priceUnit} measureByBuy={ingredient.measureByBuy} amount={ingredient.amount} performancePercent={ingredient.performancePercent} />
                  </div>
                ))
              )
            : null
        }
        </div>
        {
          amountTotal
            ? (
              <div className='importStyle d-flex justify-content-between align-items-end'>
                <p>Importe</p>
                <p href=''>$ {amountTotal}</p>
              </div>
              )
            : null
        }

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
