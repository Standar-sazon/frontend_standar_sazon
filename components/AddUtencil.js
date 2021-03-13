import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddUtencil = ({ icon, message }) => (
  <button className='AddButtonUtencil'>
    <span className='textButton'>Agregar utencilio</span>
    <span className='iconButton'>
      <FontAwesomeIcon icon={icon} />
    </span>
  </button>
)

export default AddUtencil
