import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import CardRecipeView from '../../components/CardRecipeView'

const Recipes = () => {
  return (
    <LayoutUser>
      <div className='container-cards-recipes'>
        <div className='d-flex justify-content-center'>
          <h2> carrusel</h2>
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView />
          <CardRecipeView />
          <CardRecipeView />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView />
          <CardRecipeView />
          <CardRecipeView />
        </div>
        <div className='d-flex justify-content-between mt-3'>
          <CardRecipeView />
          <CardRecipeView />
          <CardRecipeView />
        </div>
      </div>
    </LayoutUser>
  )
}

export default Recipes
