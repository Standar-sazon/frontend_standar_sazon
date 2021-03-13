import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import Logo from '../../../public/img/logo.svg'
import NextButton from '../../../components/NextButton'

const Resume = () => {
  return (
    <LayoutUser>
      <from className='resume-data d-flex'>
        <div className='kgs-number d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Peso de la preparación:</lable>
          <lable className='inp-letters'>(kgs)</lable>
          <input className='inp-summar' type='number' placeholder='Peso' />
          <lable className='inp-letters letters'>Número de porciones:</lable>
          <lable className='inp-letters'>(Unidades)</lable>
          <input className='inp-summary' type='number' placeholder='# de porciones' />
        </div>
        <div className='data-time d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Tiempo de preparación:</lable>
          <lable className='inp-letters'>(Munutos)</lable>
          <input className='inp-summary' type='number' placeholder='Tiempo' />
          <lable className='inp-letters letters'>Tiempo de cocción:</lable>
          <lable className='inp-letters'>(Unidades)</lable>
          <input className='inp-summary' type='number' placeholder='Cocción' />
        </div>
        <div className='data-temperature d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Temperatura de servicio:</lable>
          <lable className='inp-letters'>(ºC)</lable>
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
            <p className='unit-measurement green'>0.800 kgs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Rendimiento</p>
            <p className='unit-measurement orange unit'>60 %</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tamaño de la porción</p>
            <p className='unit-measurement orange unit'>400 Kgrs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Número de porciones</p>
            <p className='unit-measurement green'>2 Unidades</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de preparación</p>
            <p className='unit-measurement green'>20 Minutos</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de cocción</p>
            <p className='unit-measurement green'>15 Minutos</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Temperatura de servicio</p>
            <p className='unit-measurement green'>63 ºC</p>
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
          <div className='technical d-flex'>
            <p className='technical-concepts'>costo total de insumos</p>
            <p className='unit-measurement orange'>$ 75.70</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costo de la mano de obra</p>
            <p className='unit-measurement orange'>$ 9.12</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costo y gastos indirectos</p>
            <p className='unit-measurement orange'>$ 22.71</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costos y gastos por porción</p>
            <p className='unit-measurement orange'>$ 53.77</p>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical totals'>
              <p className='technical-concepts totals-resume'>Precio de venta</p>
              <p className='technical-concepts iva totals-resume'>por porción (S/IVA)</p>
            </div>
            <p className='totals unit-measurement iva green'>$53.77</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>% del costo y gastos por porción</p>
            <p className='unit-measurement orange'>70%</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>% de utilidad por porción</p>
            <p className='unit-measurement orange'>30%</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Utilidad por porción</p>
            <p className='unit-measurement orange'>$ 23.04</p>
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
      <div className='d-flex justify-content-center text-align-center'>
        <div className='col-12 col-lg-4'>
          <NextButton message='Crear Receta' />
        </div>
      </div>

    </LayoutUser>
  )
}

export default Resume
