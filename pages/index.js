import React from 'react'
import Layout from '../components/LayoutMaster'
import HERO from '../public/img/heroimage.jpg'
import LOGO_MOBILE from '../public/img/logo_hero_m.png'
import ARROW from '../public/img/arrow.svg'
import LOGO_DESKTOP from '../public/img/logo_hero_desk.png'

export default function Home () {
  return (
    <Layout>

      <header className='container-fluid hero'>
        <div className='row opacity-hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <img src={LOGO_MOBILE} alt='logo' className='d-md-none logo-mobile' />
                <img src={LOGO_DESKTOP} alt='logo' className='d-none d-md-block logo-desktop' />
                <div className='wrapper-btn'>
                  <button className='btn_hero'>Crea tu cuenta ya!!</button>
                  <img src={ARROW} alt='arrow' className='arrow_button' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* beneficios */}
      <div className='container-fluid section-benefits'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6' />
              {/* contenido */}
              <div className='col-12 col-md-6' />
              {/* contenido */}
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
