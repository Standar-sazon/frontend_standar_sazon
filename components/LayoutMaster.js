
import Head from 'next/head'
import React from 'react'
import NavBarWeb from './Nav'
import Footer from './Footer'
import { Container, Row } from 'react-bootstrap'

export default function LayoutMaster () {
  return (
      <Head>
        <title>Standard Layout</title>
        <link rel= 'icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/1f42bf96bf.js" crossorigin="anonymous"></script>
      </Head>
  )
}
