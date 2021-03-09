import React from 'react'
import LayoutUser from '../components/LayoutUser'

export default function Home () {
  return (
    <LayoutUser>
      {/* beneficios */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-3'>
                {/* Contenido */}
                <h2>Side bar</h2>
              </div>
              <div className='col-12 col-md-9'>
                {/* Contenido */}
                <h2>Content</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutUser>
  )
}
