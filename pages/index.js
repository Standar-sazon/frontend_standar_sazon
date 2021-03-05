import Head from 'next/head'
import React from 'react'
import Layout from '../components/LayoutMaster'

export default function Home () {
  return (
      <Layout>

        <header className ="container-fluid hero">
          <div className="row">
            <div className="container">
              <div className="col-12">
               { /*Hero.*/} 
              </div>
            </div>
          </div>
        </header>

        { /*beneficios*/}
        <div className="container-fluid-benefits">
          <div className="row">
            <div classNames="container">
              <div classNamelass="row">
                <div classNamess="col-12 col-md-6"></div>
                 {/*contenido*/}
                <div classNamess="col-12 col-md-6"></div>
                {/*contenido*/}
              </div>
            </div>
          </div>
        </div>

        {/*como.funciona.*/}
        <div className="container-fluid-how-function">
         <div classclassName="row">
          <div className="container">
            <div className="row">
            <div className = "col-12">
              {/*titulo*/}
            </div>
              <div classclassName="col-12 col-md-6 col-lg-3"></div>
                {/*card*/}
              <div classclassName="col-12 col-md-6 col-lg-3"></div>
                {/*card*/}
              <div classclassName="col-12 col-md-6 col-lg-3"></div>
              {/*card*/}
              <div classclassName="col-12 col-md-6 col-lg-3"></div>
              {/*card*/}
              <div classclassName="col-12">
                {/*call.to.action*/}
              </div>
            </div>
            </div>
          </div>
        </div>

       { /* planes*/} 
       <div className="container-fluid-section-planes">
         <div className="row">
           <div className="container">
             <div className="row">
               <div className="col-12 col-md-6">
                 {/*card.prices*/}
               </div>
               <div className="col-12 col-md-6">
                  {/*card.prices*/}
               </div>
             </div>
           </div>
         </div>
       </div>
      </Layout>

  )
}
