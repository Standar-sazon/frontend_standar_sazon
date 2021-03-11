import React from 'react'
import image from '../public/imagesRecipeView/Card_image_1.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign, faIndustry } from '@fortawesome/free-solid-svg-icons'

const CardRecipeView = ({ title, icon, category, time, entry, price }) => {
  return (
    <container>
      <row className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col'>
          <div className='card  cardRecipeView'>
            <div className='image'>
              <img
                src={image}
                layout='fill'
                className='card-img image'
                alt='Card steps in image'
              />
            </div>
            <div className='card-body descriptionCardRecipe'>
              <h5 className='card-title title'>{title}</h5>
              <ul className='list-unstyled text-center card-content-how'>
                <li className='category'>{category}</li>
                <li className='entry'>{entry}</li>
                <li className='time'>
                  <FontAwesomeIcon icon={faClock} />1/2hr
                </li>
                <li className='price'>
                  <FontAwesomeIcon icon={faDollarSign} /> {price}
                </li>
              </ul>
              <div className='containerButtonRecipeView'>
                <li className='iconWrapperRecipe textButton'>
                  <FontAwesomeIcon icon={icon} /> Cocinar
                </li>
              </div>
            </div>
          </div>
        </div>
      </row>
    </container>
  )
}

CardRecipeView.defaultProps = {
  icon: faIndustry,
  title: 'Alitas clásicas',
  category: 'Categorías',
  entry: 'Entradas',
  time: '1/2 hr',
  price: '150.00'
}
export default CardRecipeView
