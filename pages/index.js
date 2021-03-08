import React from 'react'

import Layout from '../components/LayoutMaster'
import CardHow from '../components/CardHow'
import { ContentCard1, ContentCard2, ContentCard3, ContentCard4 } from '../components/ContentCards'
import CtaButton from '../components/CtaButton'

export default function Home() {
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
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6'>beneficios</div>
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
          <div className='col-12 col-lg-6 offset-lg-6 how-it-works'>
            <p>¿Cómo funciona?</p>
            <p>----</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 d-flex justify-items-start'>
            <CardHow
              backgroundSrc='/images/images-card/Card_1.svg'
              title='Elige el tipo de receta'
              step={1}
              content='Selecciona de nuestras categorías el tipo de receta que mejor se ajuste a tu platillo.'
            >
              <ContentCard1 />
            </CardHow>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
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
          <div className='col-12 col-md-6 col-lg-3'>
            <CardHow
              backgroundSrc='/images/images-card/Card_3.svg'
              title='Ingresa los pesos'
              step={3}
              content='Ingresa el peso neto y el peso bruto de tus ingredientes, para que podamos calcularlos por ti.'
            >
              <ContentCard3 />
            </CardHow>
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
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
                {/* card.prices */}
                planes
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
