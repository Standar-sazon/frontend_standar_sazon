
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
        <button className='button-carrusel-categories red'>
          <span href='#'>Entradas</span>
        </button>
        <button className='button-carrusel-categories orange'>
          <span href='#'>Sopas</span>
        </button>
        <button className='button-carrusel-categories yellow'>
          <span href='#'>Bebidas</span>
        </button>
        <button className='button-carrusel-categories green'>
          <span href='#'>Postres</span>
        </button>
        <button className='button-carrusel-categories red'>
          <span href='#'>Plato fuerte</span>
        </button>
        <button className='button-carrusel-categories orange'>
          <span href='#'>Salsas</span>
        </button>
        <button className='button-carrusel-categories yellow'>
          <span href='#'>Complementos</span>
        </button>
      </Slider>
    </span>
  )
}

export default CarruselCategories
