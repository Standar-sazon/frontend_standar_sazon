import LayoutUser from '../../../components/LayoutUser'
import React from 'react'
import Logo from '../../../public/img/logo.svg'

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
              <lable className='title-resume'>Resumen</lable>
              <lable className='main-title-resume'>Apartada Técnico</lable>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Producción</lable>
            <lable className='unit-measurement green'>0.800 kgs</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Rendimiento</lable>
            <lable className='unit-measurement orange unit'>60 %</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Tamaño de la porción</lable>
            <lable className='unit-measurement orange unit'>400 Kgrs</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Número de porciones</lable>
            <lable className='unit-measurement green'>2 Unidades</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Tiempo de preparación</lable>
            <lable className='unit-measurement green'>20 Minutos</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Tiempo de cocción</lable>
            <lable className='unit-measurement green'>15 Minutos</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Temperatura de servicio</lable>
            <lable className='unit-measurement green'>63 ºC</lable>
          </div>
        </div>

        <div className='admin-section justify-content-center'>
          <div className='technical d-flex '>
            <div>
              <lable className='title-resume'>Resumen</lable>
              <lable className='main-title-resume'>Administrativo</lable>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>costo total de insumos</lable>
            <lable className='unit-measurement orange'>$ 75.70</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Costo de la mano de obra</lable>
            <lable className='unit-measurement orange'>$ 9.12</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Costo y gastos indirectos</lable>
            <lable className='unit-measurement orange'>$ 22.71</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Costos y gastos por porción</lable>
            <lable className='unit-measurement orange'>$ 53.77</lable>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical totals'>
              <lable className='technical-concepts totals-resume'>Precio de venta</lable>
              <lable className='technical-concepts iva totals-resume'>por porción (S/IVA)</lable>
            </div>
            <p className='totals unit-measurement iva green'>$53.77</p>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>% del costo y gastos por porción</lable>
            <lable className='unit-measurement orange'>70%</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>% de utilidad por porción</lable>
            <lable className='unit-measurement orange'>30%</lable>
          </div>
          <div className='technical d-flex'>
            <lable className='technical-concepts'>Utilidad por porción</lable>
            <lable className='unit-measurement orange'>$ 23.04</lable>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical'>
              <lable className='technical-concepts totals-resume'>Precio de venta</lable>
              <lable className='technical-concepts iva totals-resume'>por porción (C/IVA)</lable>
            </div>
            <lable className='unit-measurement green'>$89.10</lable>
          </div>
        </div>
      </div>

    </LayoutUser>
  )
}

export default Resume
