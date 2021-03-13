import React from 'react'

const AdministrativeApparatus = () => {
  return (
    <div>
      <div className='technical-container'>
        <div className='technical-header'>
          <ul className='header-list'>
            <li className='technical-list-link'><h5>Consumo total de insumos</h5><p>$</p></li>
            <li className='technical-list-link'><h5>Costo unitario por porción</h5><p>$</p></li>
            <li className='technical-list-link'><h5>Utilidad bruta por porción</h5><p>$</p></li>
            <li className='technical-list-link'><h5>Peso de venta sin (IVA)</h5><p>$</p></li>
            <li className='technical-list-link'><h5>Peso de venta con (IVA)</h5><p>$</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdministrativeApparatus
