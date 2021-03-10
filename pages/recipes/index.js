import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import CardRecipeView from '../../components/CardRecipeView'

const Recipes = () => {
  return (
    <LayoutUser>
      <h1>Lista de recipes</h1>
      <CardRecipeView>
        backgroundSrc= ''
        title:'Alitas Clásicas'
      </CardRecipeView>

    </LayoutUser>
  )
}

export default Recipes
