import { URL_BASE } from './config'

function createRecipe (objectRecipes) {
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

function recipeRequest (token) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'GET',
    body: JSON.stringify(token),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`

    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function recipeUpdate (id, objectRecipes, token) {
  const URL = `${(id, URL_BASE)}recipes`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteRecipe (id, token) {
  const URL = `${(id, URL_BASE)}recipes`
  const options = {
    method: 'DELET',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
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
