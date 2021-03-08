import React from 'react'
import styles from '../styles/components/_cardHow.module.scss'

export const ContentCard1 = () => {
  return (
    <ul className='list-unstyled text-center'>
      <li className={styles.ingredient1Opacity}>Plato fuerte</li>
      <li className={styles.ingredient2Opacity}>Postre</li>
      <li className={styles.ingredient3Opacity}>Salsa</li>
      <li className={styles.ingredient4Opacity}>Ensalada</li>
      <li className={styles.ingredient5Opacity}>Bebida</li>
    </ul>
  )
}

export const ContentCard2 = () => {
  return (
    <ul className='list-unstyled text-center'>
      <li className={styles.ingredient1Opacity}>Harina</li>
      <li className={styles.ingredient3Opacity}>Sal de ajo</li>
      <li className={styles.ingredient3Opacity}>Vinagre</li>
      <li className={styles.ingredient1Opacity}>Mayonesa</li>
      <li className={styles.ingredient3Opacity}>Oregano</li>
      <li className={styles.ingredient3Opacity}>Agregar nuevo</li>
    </ul>
  )
}

export const ContentCard3 = () => {
  return (
    <ul className='list-unstyled text-center'>
      <li className={styles.ingredient3Opacity}>Carnes de res</li>
      <li className={styles.ingredient2Opacity}>Peso bruto</li>
      <li className={styles.ingredient1Opacity}>4800 grs</li>
      <li />
      <li className={styles.ingredient3Opacity2}>Carne de res</li>
      <li className={styles.ingredient2Opacity}>Peso neto</li>
      <li className={styles.ingredient1Opacity}>3600 gr</li>
    </ul>
  )
}

export const ContentCard4 = () => {
  return (
    <ul className='list-unstyled text-center'>
      <li className={styles.ingredient3Opacity}>Número de porciones:</li>
      <li className={styles.ingredient3Opacity}>Tamaño de porción: 250 grs</li>
      <li className={styles.ingredient2Opacity}>Rendimiento:3 platos</li>
      <li />
      <li className={styles.ingredient3Opacity2}>Necesitas:</li>
      <li className={styles.ingredient3Opacity}>Carne de res: 500 grs</li>
      <li className={styles.ingredient2Opacity}>Elote: 250 grs</li>
    </ul>
  )
}
