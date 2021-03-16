import { URL_BASE } from './config'

function createSubrecipe (token, objectSubrecipes) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': `application/json ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function subRecipeRequest (token) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function subRecipeUpdate (id, objectSubrecipes, token) {
  const URL = `${URL_BASE}subRecipes/${id}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteSubrecipe (id, token) {
  const URL = `${URL_BASE}subRecipes/${id}`
  const options = {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export {
  createSubrecipe,
  subRecipeRequest,
  subRecipeUpdate,
  deleteSubrecipe

}
