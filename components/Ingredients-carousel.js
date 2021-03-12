import React, { Component } from 'react'
import Slider from 'react-slick'
import CardIngredient from '../components/Ingredient-card'

export default class Responsive extends Component {
  render () {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    return (
      <div>
        <div class='carousel-header'>
          <h3>Ingredientes</h3>
        </div>
        <Slider {...settings}>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
          <div>
            <CardIngredient />
          </div>
        </Slider>
        <div class='carousel-footer'>
          <div class='card-item'>
            <h5>Porción</h5>
            <div class='pricer'>
              <p>#</p><p>piezas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
