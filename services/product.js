import { URL_BASE } from './config'

function productsRequest(token) {
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