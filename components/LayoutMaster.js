
import Head from 'next/head'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function LayoutMaster ({ children }) {
  return (
    <>
      <Head>
        <title>Standard Layout</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&display=swap' rel='stylesheet' />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
