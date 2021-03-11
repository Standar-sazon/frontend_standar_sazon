import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import CardRecipeView from '../../components/CardRecipeView'
import ShotCamarones from '../../public/imagesRecipeView/Card_image_3.svg'

const Recipes = () => {
  return (
    <LayoutUser>
      <div className='container-cards-recipes'>
        <div className='d-flex justify-content-center'>
          <h2> carrusel</h2>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView
            ShotCamarones='../../public/imagesRecipeView/Card_image_3.svg'
            title='Alitas clásicas'
            price='150.00'
          />
          <CardRecipeView
            title='Shots de camarónes'
            price='180.00'
          />
          <CardRecipeView
            title='Nachos supremos'
            price='125.00'
          />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Sopa de verduras'
            price='150.00'
          />
          <CardRecipeView
            title='Tomahaw'
            price='650.00'
          />
          <CardRecipeView
            title='Milanesa de pollo'
            price='225.00'
          />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Hamburguesa'
            price='259.00'
          />
          <CardRecipeView
            title='Pastelillos'
            price='55.00'
          />
          <CardRecipeView
            title='Cupcake'
            price='55.00'
          />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Helado de vainilla'
            price='99.00'
          />
          <CardRecipeView
            title='Guacamole'
            price='150.00'
          />
          <CardRecipeView
            title='Salsa martajada'
            price='100.00'
          />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Mojito'
            price='130.00'
          />
          <CardRecipeView
            title='Capuchino'
            price='110.00'
          />
          <CardRecipeView
            title='Daikiri'
            price='150.00'
          />
        </div>

      </div>
    </LayoutUser>
  )
}

export default Recipes
