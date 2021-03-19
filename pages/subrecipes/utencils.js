import LayoutUser from '../../components/LayoutUser'
import React, { useState, useEffect } from 'react'
import NextButton from '../../components/NextButton'
import UtencilsButtons from '../../components/UtencilsButton'
import TableStepsRecipe from '../../components/TableStepsRecipe'
import AddUtencil from '../../components/AddUtencil'

const utencilsMock = [
  {
    name: 'sarten',
    id: 'sarten'
  },
  {
    name: 'olla',
    id: 'olla'
  },
  {
    name: 'cuchillo',
    id: 'cuchillo'
  },
  {
    name: 'budinera',
    id: 'budinera'
  },
  {
    name: 'tabla',
    id: 'tabla'
  },
  {
    name: 'licuadora',
    id: 'licuadora'
  },
  {
    name: 'freidora',
    id: 'freidora'
  },
  {
    name: 'pala',
    id: 'pala'
  },
  {
    name: 'soplete',
    id: 'soplete'
  },
  {
    name: 'cucharón',
    id: 'cucharón'
  },
  {
    name: 'atomizador',
    id: 'atomizador'
  },
  {
    name: 'bowl',
    id: 'bowl'
  },
  {
    name: 'rallador',
    id: 'rallador'
  },
  {
    name: 'espatula',
    id: 'espatula'
  },
  {
    name: 'colador',
    id: 'colador'
  }
]

const getUtencilComponents = (utencils, checkedUtencils, handleUtencilCheck, groupsOf = 5) => {
  const utencilsCopy = [...utencils]
  const groups = new Array(Math.ceil(utencils.length / groupsOf))
    .fill()
    .map(_ => utencilsCopy.splice(0, groupsOf))

  return groups.map((group, i) => <div className='labelUtencils d-flex flex-row justify-content-between' key={i}>
    {
      group.map((utencil, j) => <UtencilsButtons
        key={utencil.id}
        id={utencil.id}
        message={utencil.name}
        checked={checkedUtencils[utencil.id]}
        onChange={handleUtencilCheck}
      />)
    }
  </div>)
}

const Utencilios = () => {
  const [utencils, setUtencils] = useState([])
  const [checkedUtencils, setCheckedUtencils] = useState({})
  const [utencilsSelected, setUtencilsSelected] = useState([])

  const handleUtencilCheck = event => {
    const newCheckedUtencils = {
      ...checkedUtencils,
      [event.target.name]: event.target.checked
    }

    const arrayOfCheckedUtencils = Object
      .entries(newCheckedUtencils)
      .filter(([, checked]) => checked)
      .map(([id]) => id)

    setCheckedUtencils(newCheckedUtencils)
    console.log(newCheckedUtencils)
    console.log(arrayOfCheckedUtencils)
    setUtencilsSelected(arrayOfCheckedUtencils)
  }

  const utencilComponents = getUtencilComponents(utencils, checkedUtencils, handleUtencilCheck)

  useEffect(async () => {
    const response = utencilsMock // TODO: Call API.
    setUtencils(response)
  }, [utencils])

  const [instructions, setInstructions] = useState({
    text: ''
  })
  //
  const handleInputChange = event => {
    const newInstructions = {
      ...instructions,
      [event.target.text]: event.target.value
    }

    const arrayOfInstructions = Object
      .entries(newInstructions)

    setInstructions(newInstructions)
    console.log(newInstructions)
    console.log(arrayOfInstructions)
  }

  return (
    <LayoutUser>
      <div className='allUtencils'>
        <p>Utensilios</p>
        {utencilComponents}
        <div>
          <AddUtencil />
        </div>
        <div>
          <p>Escribe tus instrucciones</p>
          <form className='card-table'>
            <div>
              <div>
                <div className='form-input d-flex flex-row'>
                  <input
                    className='inputStep'
                    type='textbox'
                    placeholder='Pasos a seguir'
                    text=''

                  />
                  <div className=''>
                    <button className='plusbutton'>+</button>
                  </div>
                </div>
                <div>
                  <div>
                    <TableStepsRecipe message='Paso1' />
                  </div>
                  <div>
                    <TableStepsRecipe message='Paso2' />
                  </div>
                  <div>
                    <TableStepsRecipe message='Paso 3' />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <NextButton message='Siguiente' />
          </div>
        </div>
      </div>
    </LayoutUser>
  )
}
export default Utencilios
