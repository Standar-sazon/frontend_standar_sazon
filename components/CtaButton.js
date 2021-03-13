import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome//free-solid-svg-icons'

const CtaButton = ({ icon, message }) => (
  <div className='containerButton'>
    <span className='iconWrapper'>
      <FontAwesomeIcon icon={icon} />
    </span>
    <span className='message'>{message}</span>
  </div>
)

CtaButton.defaultProps = {
  icon: faChevronRight,
  message: 'Aceptar'
}

export default CtaButton
