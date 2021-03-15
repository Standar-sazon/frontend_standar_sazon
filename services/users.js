import { URL_BASE } from './config'

// login
function login (objectCredentials) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectCredentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

// creación de cuenta//
function create (objectUser) {
  const URL = `${URL_BASE}user`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectUser),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

// update//
function update (objectUser) {
  const URL = `${URL_BASE}user`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectUser),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

// Solicitud de usuario//
function userRequest (objectUser) {
  const URL = `${URL_BASE}user`
  const options = {
    method: 'GET',
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
  create,
  update,
  userRequest
}
