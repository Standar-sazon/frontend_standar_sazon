import React from 'react'
import Link from 'next/link'
import Layout from '../components/LayoutMaster'
import LOGO_MOBILE from '../public/img/logomobile.svg'
import ARROW from '../public/img/arrow.svg'
import LOGO_DESKTOP from '../public/img/logodesktop.svg'
import { Card } from 'react-bootstrap'
import BENEFICIOS from '../public/palomita.svg'
import Benefits from '../components/Benefits'
import Dish from '../components/Benefits-image'
import ImageBack from '../components/Benefits-bkg'
import ImageBackOrange from '../components/HowToBkg'
import HowToRight from '../components/HowItWork'
import HowToLeft from '../components/HowItWorkLeft'
import LineaBlanca from '../public/linewhite.svg'
import ArrowButton from '../public/dark-arrow.svg'

export default function Home () {
  const router = useRouter()
  return (
    <Layout>

      <header className='container-fluid hero'>
        <div className='row opacity-hero'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <img src={LOGO_MOBILE} alt='logo' className='d-md-none logo-mobile' />
                <img src={LOGO_DESKTOP} alt='logo' className='d-none d-md-block logo-desktop' />
                <Link href='/create'>
                  <div className='wrapper-btn'>
                    <button className='btn_hero'>¡Crea tu cuenta ya!</button>
                    <img src={ARROW} alt='arrow' className='arrow_button' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* beneficios */}
      <div id='beneficios' className='container-fluid section-benefits'>
        <div className='row'>
          <ImageBack />
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'><Dish /></div>
              <div className='col-12 col-md-6'><Benefits /></div>
            </div>
          </div>
        </div>
      </div>

      {/* como.funciona. */}
      <div id='como-funciona' className='container-fluid section-howto'>
        <div className='row'>
          <ImageBackOrange />
          <div className='container d-flex'>
            <div className='row'>
              <div className='how-to-title'>
                <div class='how-title-conatiner'>
                  <h2>¿Cómo funciona?</h2>
                  <img src={LineaBlanca} alt='Linea' />
                </div>
              </div>
              <div className='col-12 col-md-6 p-0'><HowToLeft /></div>
              <div className='col-12 col-md-6 p-0'><HowToRight /></div>
              <div class='green-call-to-action'>
                <Link href='/create'>
                  <button><img src={ArrowButton} alt='' /><p>Comienza tu prueba gratuita.</p> </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* planes */}
      <div id='planes' className='container-fluid section-planes'>
        <div className='row'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <Card className='card-prices-1'>
                  <div className='d-flex justify-content-between align-items-center'>
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
                  <Link href='/create'>
                    <button className='card-button'>Únete</button>
                  </Link>
                </Card>
              </div>
              <div className='col-12 col-md-6'>
                <Card className='card-prices-2'>
                  <div className='d-flex justify-content-between align-items-center'>
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
                  <Link href='/create'>
                    <button className='card-button'>Contrata</button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
