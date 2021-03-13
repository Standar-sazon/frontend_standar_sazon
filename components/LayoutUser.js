import Head from 'next/head'
import React from 'react'
import NavUser from './NavUser'
import SideBar from '../components/Side-bar'
import Icon from '../public/StandarSazonFondo.ico'

export default function LayoutUser ({ children }) {
  return (
    <>
      <Head>
        <title>Standard & Sazón</title>
        <link rel='icon' href={Icon} />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        <scrip src='https://kit.fontawesome.com/1f42bf96bf.js' crossOrigin='anonymous' />
      </Head>
      <NavUser />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-3 p-0'>
            <SideBar />
          </div>
          <div className='col-12 col-md-9'>
            {/* Contenido */}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
