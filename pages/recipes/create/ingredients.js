import React, { useEffect, useState } from 'react'
import LayoutUser from '../../../components/LayoutUser'
import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'
import { ingredientRequest } from '../../../services/ingredients'
// import Onion from '../../../public/onion.png'

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([])
  const getIngredients = async () => {
    const response = await ingredientRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  useEffect(async () => {
    const ingredients = await getIngredients()
    setIngredients(ingredients)
    for (const key in ingredients) {
      const names = [ingredients[key].name]
      console.log(names)
    }
  }, [])

  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label>Ingrediente</label>
                <input type='search' list='ingredients' placeholder='Ingrediente' name='' />
                <datalist id='ingredients'>
                  <option value='PHP' />
                </datalist>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto</label>
                <input type='text' placeholder='Peso neto' name='' />
              </div>
              <div className='d-flex flex-column'>
                <label>Peso Bruto</label>
                <input type='text' placeholder='Peso bruto' name='' />
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
