import React from 'react'

const UtencilsButtonsOrange = ({ message, color = 'orange' }) => (
  <div className={`button-utencils d-flex ${color}`}>
    <div className='checkmark'>
      <input type='checkbox' />
    </div>
    <label className=' '>{message}
    </label>
  </div>
)

UtencilsButtonsOrange.defaultProps = {
  message: 'Aceptar'
}

export default UtencilsButtonsOrange
