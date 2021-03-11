import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NextButton = ({ icon, message }) => (
  <button className='insideButton'>
    <span className='textButton'>{message}</span>
    <span className='iconButton'>
      <FontAwesomeIcon icon={icon} />
    </span>
  </button>
)

NextButton.defaultProps = {
  icon: faChevronRight,
  message: 'Aceptar'
}

export default NextButton
