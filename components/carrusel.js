
import Slider from 'react-slick'

const CarruselCategorys = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500

  }
  return (
    <div className='container-carrusel-categorys'>
      <Slider {...settings}>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Entradas</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Sopas</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Bebidas</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Postres</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Plato fuerte</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Salsas</span>
        </div>
        <div className='text-carrusel-categorys container-carrusel-text'>
          <span>Complementos</span>
        </div>
      </Slider>
    </div>
  )
}

export default CarruselCategorys
