import { URL_BASE } from './config'

// login
/**
 *
 * @param {Object} objectCredentials Objecto que recibe email y password
 */
function login (objectCredential) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectCredential),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

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

export {
  login,
  create
}
