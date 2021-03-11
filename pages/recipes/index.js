import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import CardRecipeView from '../../components/CardRecipeView'

const Recipes = () => {
  return (
    <LayoutUser>
      <div className='row'>
        <div className="col-12 col-md-3 col-xl-3 d-flex justify-items-start'">
          <CardRecipeView />
        </div>
        <div className='col-12 col-md-3 col-xl-3'>
          <CardRecipeView />
        </div>
        <div className='col-12 col-md-3 col-xl-3'>
          <CardRecipeView />
        </div>
      </div>
    </LayoutUser>
  )
}

export default Recipes
