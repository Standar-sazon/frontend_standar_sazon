import React from 'react'

const TehnicalApparatus = () => {
  return (
    <div className='technical-container'>
      <div className='technical-header'>
        <ul className='header-list'>
          <li className='technical-list-link'><h5>Rendimiento por porción</h5><p>ml</p></li>
          <li className='technical-list-link'><h5>Tamaño de porción</h5><p>ml</p></li>
          <li className='technical-list-link'><h5>Número de porción(es)</h5><p>#</p></li>
          <li className='technical-list-link'><h5>Tiempo de preparación</h5><p>minutos</p></li>
          <li className='technical-list-link'><h5>Temperatura del servicio</h5><p>grados</p></li>
          <li className='technical-list-link'><h5>Tiempo de cocción</h5><p>minutos</p></li>
        </ul>
      </div>
    </div>
  )
}

export default TehnicalApparatus
