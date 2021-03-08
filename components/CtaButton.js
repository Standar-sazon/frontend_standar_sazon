import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/components/_ctaButton.module.scss'

const CtaButton = ({ icon, message }) => (
  <div className={styles.container}>
    <span className={styles.iconWrapper}>
      <FontAwesomeIcon icon={icon} />
    </span>
    <span className={styles.message}>{message}</span>
  </div>
)

CtaButton.defaultProps = {
  icon: faChevronRight,
  message: 'Aceptar'
}

export default CtaButton
