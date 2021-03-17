import { URL_BASE } from './config'

// Crear Ingrediente
function createIngredient (token, objectIngredient) {
  const URL = `${URL_BASE}products`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectIngredient),
    headers: {
      'content-Type': `application/json ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}
// Traer Ingredientes
function ingredientRequest (token) {
  const URL = `${URL_BASE}products`
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
// Traer Ingrediente por ID
function ingredientRequestByID (id, token) {
  const URL = `${URL_BASE}products/${id}`
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
// Actualizar Ingredientes
function ingredientUpdate (id, objectIngredient, token) {
  const URL = `${URL_BASE}products/${id}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectIngredient),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}
// Eliminar Ingredientes
function deleteIngredient (id, token) {
  const URL = `${URL_BASE}products/${id}`
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
  createIngredient,
  ingredientRequest,
  ingredientUpdate,
  deleteIngredient,
  ingredientRequestByID
}
