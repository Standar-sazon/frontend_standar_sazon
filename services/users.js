import { URL_BASE, URL_BASE_LOCAL } from './config'

//login

@param {Object} dataCredential

function login(dataCredential) {
    const URL = '${URL_BASE}auth/login'
    const options = {
        method: 'POST',
        body: JSON.stringify(dataCredential),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    } 
   return fetch(URL, option) 

}

function create(dataUser) {
    const URL = '${URL_BASE}user'
    const options = {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    } 
   return fetch(URL, option) 

}
export {
    login,
    create
}