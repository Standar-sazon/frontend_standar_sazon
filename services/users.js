// Servicio endpoint que solo involucren al usuario
import { URL_BASE, URL_BASE_LOCAL } from './config'

// login
/**
 *
 * @param {Object} objectCredentials Objecto que recibe email y password
 */
function login (objectCredentials) {
  const URL = `${URL_BASE_LOCAL}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectCredentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options) // retorna una promesa
}

// creación de cuenta
function create (objectUser) {
  const URL = `${URL_BASE}users`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectUser),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

// update
function update (newDataUser) {
  const URL = `${URL_BASE}users`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(newDataUser),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export {
  login,
  create,
  update
}
