import React from 'react'
import Layout from '../components/LayoutMaster'
import { Card } from 'react-bootstrap'
import BENEFICIOS from '../public/palomita.svg'
import Benefits from '../components/Benefits'
import Dish from '../components/Benefits-image'
import ImageBack from '../components/Benefits-bkg'

export default function Home () {
  return (
    <Layout>

      <header className='container-fluid hero'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* Hero. */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* beneficios */}
      <div className='container-fluid section-benefits'>
        <div className='row'>
          <ImageBack />
          <div className='container'>
            <div className='row'>
              <div class='col-12 col-md-6'><Dish /></div>
              <div class='col-12 col-md-6'><Benefits /></div>
            </div>
          </div>
        </div>
      </div>

      {/* como.funciona. */}
      <div className='container-fluid section-how-function'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                {/* titulo */}
              </div>
              <div className='col-12 col-md-6 col-lg-3' />
              {/* card */}
              <div className='col-12 col-md-6 col-lg-3' />
              {/* card */}
              <div className='col-12 col-md-6 col-lg-3' />
              {/* card */}
              <div className='col-12 col-md-6 col-lg-3' />
              {/* card */}
              <div className='col-12'>
                {/* call.to.action */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* planes */}
      <div className='container-fluid section-planes'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <Card className='card-beneficios1'>
                  <div className='d-flex justify-content-between alig-items-center'>
                    <div>
                      <h1>Básico</h1>
                      <h2>Free</h2>
                    </div>
                    <p className='color-subtittle'>Free</p>
                  </div>
                  <p className='margin-plan'>/Sin Limite de tiempo</p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    Creación de receta con base de datos
                  </p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    + de mil ingredientes
                  </p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    Indicadores administrativos preestablecidos
                  </p>
                  <button className='card-button'>Únete</button>
                </Card>
              </div>
              <div className='col-12 col-md-6'>
                <Card className='card-beneficios2'>
                  <div className='d-flex justify-content-between alig-items-center'>
                    <div>
                      <h1>Premiun</h1>
                      <h2>$340</h2>
                    </div>
                    <p className='color-subtittle'>$340</p>
                  </div>
                  <p className='margin-plan'>/Mensual</p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    Descarga de recetas en formato PDF
                  </p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    Indicadores administrativos preestablecidos
                  </p>
                  <p>
                    <img className='' src={BENEFICIOS} alt='approved' />
                    Creación de ingredientes propios
                  </p>
                  <button className='card-button'>Únete</button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
