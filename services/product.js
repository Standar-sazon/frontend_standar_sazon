import { URL_BASE } from './config'

function productsRequest() {
  const URL = `${URL_BASE}products`
  const options = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)