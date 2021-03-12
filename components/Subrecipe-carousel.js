import React, { Component } from 'react'
import Slider from 'react-slick'
import CardIngredient from '../components/Ingredient-card'

export default class PreviousNextMethods extends Component {
  constructor (props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }

  next () {
    this.slider.slickNext()
  }

  previous () {
    this.slider.slickPrev()
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
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
        <h2>Previous and Next methods</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <CardIngredient />
          </div>
          <div key={2}>
            <CardIngredient />
          </div>
          <div key={3}>
            <CardIngredient />
          </div>
          <div key={4}>
            <CardIngredient />
          </div>
          <div key={5}>
            <CardIngredient />
          </div>
          <div key={6}>
            <CardIngredient />
          </div>
        </Slider>
        <div style={{ textAlign: 'center' }}>
          <button className='button' onClick={this.previous}>
            Previous
          </button>
          <button className='button' onClick={this.next}>
            Next
          </button>
        </div>
      </div>
    )
  }
}
