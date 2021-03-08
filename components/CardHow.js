import React from 'react'
import styles from '../styles/components/_cardHow.module.scss'

const CardHow = ({ children, backgroundSrc, title, step, content, subContent }) => {
  const subContentElement = subContent
    ? <small>{subContent}</small>
    : null

  return (
    <div className={`card ${styles.CardHow}`}>
      <div>
        <img
          src={backgroundSrc}
          layout='fill'
          className={`card-img ${styles.image}`}
          alt='Card steps in image'
        />
      </div>
      <div className='card-img-overlay text-white image'>
        <div className='card-img-overlay'>
          <h5 className='card-title'>{title}</h5>
          {children}
        </div>
      </div>
      <div className={`card-body ${styles.description}`}>
        <div className={styles.step}>{step}</div>
        <p className={styles.cardText}>{content}</p>
        {subContentElement}
      </div>
    </div>
  )
}

export default CardHow
