import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import Logo from '../../public/img/logo.svg'

const Resume = () => {
  return (
    <LayoutUser>
      <from className='resume-data inline-block d-flex'>
        <div className='kgs-number d-flex text-left form-input'>
          <lable className='inp-letters'>Peso de la preparación:</lable>
          <lable className='inp-letters'>(kgs)</lable>
          <input className='inp-summar' type='number' placeholder='Peso' />
        </div>
        <div className='data-time d-flex text-left form-input'>
          <lable className='inp-letters letters letters2'>Tamaño de la porciòn:</lable>
          <lable className='inp-letters'>(Kgs)</lable>
          <input className='inp-summary time' type='number' placeholder='Tiempo'/>  
        </div>
        <div className='data-temperature d-flex text-left form-input'>
          <lable className='inp-letters'>Tiempo de cocciòn:</lable>
          <lable className='inp-letters'>(Minutos)</lable>
          <input className='inp-summary' type='number' placeholder='Grados' />
        </div>
      </from>

      <div className='summary d-flex justify-content-center'>
        <div className='technical-section'>
          <div className='technical d-flex'>
            <div>
              <p className='title-resume'>Resumen</p>
              <p className='main-title-resume'>Apartada Técnico</p>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Producción</p>
            <p className='unit-measurement green'>0.400 kgs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Rendimiento</p>
            <p className='unit-measurement orange unit'>73 %</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tamaño de la porción</p>
            <p className='unit-measurement orange unit'>400 Kgrs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Número de porciones</p>
            <p className='unit-measurement green'>1 Unidad</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de preparación</p>
            <p className='unit-measurement green'>22 Minutos</p>
          </div>
        </div>

        <div className='admin-section justify-content-center'>
          <div className='technical d-flex '>
            <div>
              <p className='title-resume'>Resumen</p>
              <p className='main-title-resume'>Administrativo</p>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical totals'>
              <p className='technical-concepts totals-resume'>Precio de venta</p>
              <p className='technical-concepts iva totals-resume'>por porción (S/IVA)</p>
            </div>
            <p className='totals unit-measurement iva green'>$53.77</p>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical'>
              <p className='technical-concepts totals-resume'>Precio de venta</p>
              <p className='technical-concepts iva totals-resume'>por porción (C/IVA)</p>
            </div>
            <p className='unit-measurement green'>$89.10</p>
          </div>
        </div>
      </div>

    </LayoutUser>
  )
}

export default Resume
