import React from 'react'

import Layout from '../components/LayoutMaster'
import CardHow from '../components/CardHow'
import { ContentCard1, ContentCard2, ContentCard3, ContentCard4 } from '../components/ContentCards'
import CtaButton from '../components/CtaButton'
import LOGO_MOBILE from '../public/img/logomobile.svg'
import ARROW from '../public/img/arrow.svg'
import LOGO_DESKTOP from '../public/img/logodesktop.svg'
import { Card } from 'react-bootstrap'
import BENEFICIOS from '../public/palomita.svg'
import Benefits from '../components/Benefits'
import Dish from '../components/Benefits-image'
import ImageBack from '../components/Benefits-bkg'

export default function Home() {
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
      <div className='container-fluid section-how-function'>
        <div className='row'>
          <div className='col-12 col-lg-6 offset-lg-6 how-it-works'>
            <h1 className='font border-down'>¿Cómo funciona?</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-3 d-flex justify-items-start'>
            <CardHow
              backgroundSrc='/images/images-card/Card_1.svg'
              title='Elige el tipo de receta'
              step={1}
              content='Selecciona de nuestras categorías el tipo de receta que mejor se ajuste a tu platillo.'
            >
              <ContentCard1 />
            </CardHow>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <CardHow
              backgroundSrc='/images/images-card/Card_2.svg'
              title='Elige tus ingredientes'
              step={2}
              content='Selecciona de nuestra lista de ingredientes* o agrega lo que necesites.'
              subContent='* Los precios de los productos están basados en la región centro (CDMX)'
            >
              <ContentCard2 />
            </CardHow>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <CardHow
              backgroundSrc='/images/images-card/Card_3.svg'
              title='Ingresa los pesos'
              step={3}
              content='Ingresa el peso neto y el peso bruto de tus ingredientes, para que podamos calcularlos por ti.'
            >
              <ContentCard3 />
            </CardHow>
          </div>
          <div className='col-12 col-md-6 col-xl-3'>
            <CardHow
              backgroundSrc='/images/images-card/Card_4.svg'
              title='Elige tus porciones'
              step={4}
              content='Ingresa la cantidad de porciones que requiere tu platillo y te diremos exactamente lo que necesitas comprar.'
            >
              <ContentCard4 />
            </CardHow>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <CtaButton message='Comienza tu prueba gratuita.' />
          </div>
        </div>
      </div>
      {/* planes */}
      <div className='container-fluid section-planes'>
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
                  <button className='card-button'>Únete</button>
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
                  <button className='card-button'>Contrata</button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
