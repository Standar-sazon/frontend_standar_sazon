import React from 'react'
import Layout from '../components/LayoutMaster'

export default function login () {
  return (
    <Layout>
      <div className='container-fluid section-login'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                {/* content */}
                <div className='access-card' />
              </div>
              <div className='col-12 col-md-8'>
                {/* content */}
                <div className='access-card-1'>
                  <div className='text-login'>
                    <p>Inicia
                      sesión
                    </p>
                    <p>y escala tus menús</p>
                  </div>
                  <div>
                    <p>Email*</p>
                    <input type='text' placeholder='Escribe tu correo' name='' id='' />
                    <p>Contraseña*</p>
                    <input type='text' placeholder='Escribe tu contraseña' name='' id='' />
                    <button>Inicia sesión</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
