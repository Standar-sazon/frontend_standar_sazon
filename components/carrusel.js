
import Slider from 'react-slick'

const CarruselCategories = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500

  }
  return (
    <span className='container-carrusel-categories'>
      <Slider {...settings}>
        <span className='text-carrusel-categories container-carrusel-text container-color-entradas'>
          <span href='#'>Entradas</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text container-color-sopas'>
          <span href='#'>Sopas</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text container-color-bebida'>
          <span href='#'>Bebidas</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text container-color-postres'>
          <span href='#'>Postres</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text container-color-p.fuerte'>
          <span href='#'>Plato fuerte</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text container-color-salsas'>
          <span href='#'>Salsas</span>
        </span>
        <span className='text-carrusel-categories container-carrusel-text'>
          <span href='#'>Complementos</span>
        </span>
      </Slider>
    </span>
  )
}

export default CarruselCategories
