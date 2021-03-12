import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import CardRecipeView from '../../components/CardRecipeView'
import Carrusel from '../../components/carrusel'

const Recipes = () => {
  return (
    <LayoutUser>
      <div className='container-cards-recipes'>
        <div className='row' />
        <div className='col-12-md-4 d-flex justify-content-center'>
          <Carrusel />
        </div>
        <div className='col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Alitas clásicas'
            price='150.00'
            backgroundSrc='/imagesRecipeView/CardImage1.svg'
          />
          <CardRecipeView
            title='Shots de camarónes'
            price='180.00'
            backgroundSrc='/imagesRecipeView/CardImage2.svg'
          />
          <CardRecipeView
            title='Nachos supremos'
            price='125.00'
            backgroundSrc='/imagesRecipeView/CardImage3.svg'
          />
        </div>
        <div className='col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Sopa de verduras'
            price='150.00'
            backgroundSrc='/imagesRecipeView/CardImage5.svg'
          />
          <CardRecipeView
            title='Crema de champiñones'
            price='650.00'
            backgroundSrc='/imagesRecipeView/CardImage4.svg'
          />
          <CardRecipeView
            title='Ramen con huevo'
            price='175.00'
            backgroundSrc='/imagesRecipeView/CardImage6.svg'
          />
        </div>
        <div className='col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Tomahaw'
            price='650.00'
            backgroundSrc='/imagesRecipeView/CardImage8.svg'

          />
          <CardRecipeView
            title='Milanesa de pollo'
            price='225.00'
            backgroundSrc='/imagesRecipeView/CardImage9.svg'

          />
          <CardRecipeView
            title='Hamburguesa'
            price='250.00'
            backgroundSrc='/imagesRecipeView/CardImage10.svg'

          />
        </div>
        <div className=' col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Pastelillos frutales'
            price='55.00'
            backgroundSrc='/imagesRecipeView/CardImage11.svg'
          />
          <CardRecipeView
            title='Cupcake'
            price='55.00'
            backgroundSrc='/imagesRecipeView/CardImage12.svg'
          />
          <CardRecipeView
            title='Helado de vainilla'
            price='90.00'
            backgroundSrc='/imagesRecipeView/CardImage13.svg'
          />
        </div>
        <div className='col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Guacamole'
            price='150.00'
            backgroundSrc='/imagesRecipeView/CardImage14.svg'
          />
          <CardRecipeView
            title='Salsa martajada'
            price='100.00'
            backgroundSrc='/imagesRecipeView/CardImage15.svg'
          />
          <CardRecipeView
            title='Salsa roja'
            price='65.00'
            backgroundSrc='/imagesRecipeView/CardImage18.svg'
          />
        </div>
        <div className='col-12-md-4 d-flex justify-content-between mt-3'>
          <CardRecipeView
            title='Mojito'
            price='130.00'
            backgroundSrc='/imagesRecipeView/CardImage16.svg'
          />
          <CardRecipeView
            title='Capuchino'
            price='110.00'
            backgroundSrc='/imagesRecipeView/CardImage17.svg'
          />
          <CardRecipeView
            title='Daikiri'
            price='150.00'
            backgroundSrc='/imagesRecipeView/CardImage19.svg'
          />
        </div>

      </div>
    </LayoutUser>
  )
}

export default Recipes
