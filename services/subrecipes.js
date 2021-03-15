import { URL_BASE } from './config'

function createSubrecipe (objectSubrecipes) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function SubRecipeRequest (token) {
  const URL = `${URL_BASE}subRecipes`
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

function SubRecipeUpdate (id, objectSubrecipes, token) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(id, objectSubrecipes, token),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteSubrecipe (id, token) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'DELET',
    body: JSON.stringify(id, token),
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
  SubRecipeRequest,
  SubRecipeUpdate,
  deleteSubrecipe

}
