import React from 'react'
import Layout from '../components/LayoutMaster'

export default function login () {
  return (
    <Layout>
      <div class='container-fluid section-login'>
        <div class='row'>
          <div class='container'>
            <div class='row'>
              <div class='col-12 col-md-4'>
                {/* content */}
              </div>
              <div class='col-12 col-md-8'>
                {/* content */}
                <div className='access-card'>
                  <h2>Inicia
                    sesión
                  </h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio nihil doloribus sed esse perferendis, officiis cum sequi amet repellendus facilis quisquam optio minus vitae.</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p>Correo</p>
                    <input class='enter-email' type='text' placeholder='example@mail.com' name='' id='' />
                    <p>Contraseña</p>
                    <input class='enter-email' type='text' placeholder='example@mail.com' name='' id='' />
                    <button class='boton-gratis'>Inicia sesión</button>
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
