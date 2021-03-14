import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome//free-solid-svg-icons'
import Link from 'next/link'

const CtaButton = ({ icon, message }) => (
  <Link href='/create'>
    <button className='containerButton'>
      <span className='iconWrapper'>
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className='message'>{message}</span>
    </button>
  </Link>

)

CtaButton.defaultProps = {
  icon: faChevronRight,
  message: 'Aceptar'
}

export default CtaButton
