import { URL_BASE } from './config'

function createRecipe(objectRecipes) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function recipeRequest(objectRecipes) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'GET',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function recipeUpdate(objectRecipes) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteRecipe(objectRecipes) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'DELET',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export {
  createRecipe,
  recipeRequest,
  recipeUpdate,
  deleteRecipe
}
