import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LayoutUser from '../../../components/LayoutUser'
import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'
import { productRequest } from '../../../services/products'

const schema = yup.object().shape({
  product: yup.string().required('El campo es requerido'),
  netWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido'),
  grossWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido')
})

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([])
  const [product, setProduct] = useState({})
  const [ingredientSelected, setIngredientSelected] = useState([])
  const { register, handleSubmit, errors, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const getAmount = (netWeight, priceUnit) => (netWeight * priceUnit).toFixed(2)
  const getPerformancePercent = (netWeight, grossWeight) => (netWeight / grossWeight) * 100

  const watchAllFields = watch()

  useEffect(() => {
    const performancePercent = getPerformancePercent(parseFloat(watchAllFields.netWeight), parseFloat(watchAllFields.grossWeight))
    const amount = parseFloat(getAmount(parseFloat(watchAllFields.netWeight), product.priceUnit))
    setProduct({ ...product, netWeight: parseFloat(watchAllFields.netWeight), grossWeight: parseFloat(watchAllFields.grossWeight), performancePercent, amount })
  }, [watchAllFields.netWeight, watchAllFields.grossWeight])

  const getIngredients = async () => {
    const response = await productRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  useEffect(async () => {
    const ingredients = await getIngredients()
    setIngredients(ingredients)
  }, [])

  const handleChange = (event) => {
    const productName = event.target.value
    const filteredProduct = ingredients.filter(product => product.name === productName)
    setProduct(filteredProduct[0])
  }

  const onSubmit = ({ netWeight, grossWeight }) => {
    setIngredientSelected([...ingredientSelected, product])
    setValue('product', '')
    setValue('netWeight', '')
    setValue('grossWeight', '')
  }

  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label>Ingrediente</label>
                <input type='search' list='products' ref={register} onChange={handleChange} placeholder='Ingrediente' name='product' />
                <datalist id='products'>
                  {
                    ingredients.map(ingredient =>
                      <option key={ingredient._id} value={ingredient.name} />
                    )
                    }
                </datalist>
                <p>{errors.product?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso Bruto</label>
                <input type='text' ref={register} placeholder='Peso bruto' name='grossWeight' />
                <p>{errors.grossWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto</label>
                <input type='text' ref={register} placeholder='Peso neto' name='netWeight' />
                <p>{errors.netWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ {product?.priceUnit}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>{product?.measureByBuy} </p>
              </div>
              <button type='submit' className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>

        <form>
          <div className='form-input'>
            <p>Agregar Subreceta</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label>Subreceta</label>
                <input type='text' placeholder='Ingrediente' name='' />
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='' />
              </div>
              <div className='d-flex flex-column'>
                <label>Peso bruto</label>
                <input type='text' placeholder='Peso bruto' name='' />
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
