import React, { useEffect, useState } from 'react'
import LayoutUser from '../../../components/LayoutUser'
import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'
import { productRequest } from '../../../services/products'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
// import Onion from '../../../public/onion.png'

const schema = yup.object().shape({
  ingrediente: yup.string().required('Campo requerido'),
  pesoBruto: yup.number().required('Campo requerido'),
  pesoNeto: yup.number().required('Campo requerido')
})

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([])
  const [product, setProduct] = useState({})
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

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label>Ingrediente</label>
                <input type='search' list='products' onChange={handleChange} placeholder='Ingrediente' name='ingrediente' ref={register} />
                <p>{errors.ingrediente?.message}</p>
                <datalist id='products'>
                  {
                    ingredients.map(ingredient =>
                      <option key={ingredient._id} value={ingredient.name} />
                    )
                  }
                </datalist>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='pesoNeto' ref={register} />
                <p>{errors.pesoNeto?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso Bruto</label>
                <input type='text' placeholder='Peso bruto' name='pesoBruto' ref={register} />
                <p>{errors.pesoBruto?.message}</p>
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
                <input type='text' placeholder='Ingrediente' name='subreceta' ref={register} />
                <p>{errors.subreceta?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='pesoNeto' ref={register} />
                <p>{errors.pesoNeto?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso bruto</label>
                <input type='text' placeholder='Peso bruto' name='pesoBruto' ref={register} />
                <p>{errors.pesoBruto?.message}</p>
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
