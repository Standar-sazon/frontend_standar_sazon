import React from 'react'

const UtencilsButtonsOrange = ({ message, color = 'orange' }) => (
  <div className={`button-utencils d-flex ${color}`}>
    <input type='checkbox' />
    <label className=' '>{message}
    </label>
  </div>
)

UtencilsButtonsOrange.defaultProps = {
  message: 'Aceptar'
}

export default UtencilsButtonsOrange
