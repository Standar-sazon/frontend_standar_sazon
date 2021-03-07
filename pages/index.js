import React from 'react'
import Layout from '../components/LayoutMaster'
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
                {/* card.prices */}
              </div>
              <div className='col-12 col-md-6'>
                {/* card.prices */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}
