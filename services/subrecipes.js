import { URL_BASE } from './config'

function createSubrecipe(objectSubrecipes) {
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

function SubRecipeRequest(objectSubrecipes) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'GET',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function SubRecipeUpdate(objectSubrecipes) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteSubrecipe(objectSubrecipes) {
  const URL = `${URL_BASE}subRecipes`
  const options = {
    method: 'DELET',
    body: JSON.stringify(objectSubrecipes),
    headers: {
      'content-Type': 'application/json'
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
