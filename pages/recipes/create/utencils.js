import LayoutUser from '../../../components/LayoutUser'
import React, { useState, useEffect } from 'react'
import NextButton from '../../../components/NextButton'
import UtencilsButtons from '../../../components/UtencilsButton'
import TableStepsRecipe from '../../../components/TableStepsRecipe'
import AddUtencil from '../../../components/AddUtencil'

const utencilsMock = [
  {
    name: 'sarten',
    id: '7b15450b11a442959665f96888f41302'
  },
  {
    name: 'olla',
    id: '11fd33e985df4ba7821f879ae434b0af'
  },
  {
    name: 'cuchillo',
    id: 'e10b9daa98814dd5b3c142310c858b31'
  },
  {
    name: 'budinera',
    id: '69efecb3c982458985bc032851a94bb3'
  },
  {
    name: 'tabla',
    id: 'a52a4b3d7f4a4ddea8c505b73ebc10b2'
  },
  {
    name: 'licuadora',
    id: '7d69ad5be2cf4cb6ae59b3a4f5b35f2f'
  },
  {
    name: 'freidora',
    id: 'faf52f84549742598f3dc41e4fee268b'
  },
  {
    name: 'pala',
    id: '2c7df12370024ea68143e148f5d13d26'
  },
  {
    name: 'soplete',
    id: 'a8ab0139460d43018a98cb33c5758bc'
  },
  {
    name: 'cucharón',
    id: 'de06925cd18b42b28ef21635afa060ac'
  },
  {
    name: 'atomizador',
    id: '63d34fc0fc66489aaea008675429fbd9'
  },
  {
    name: 'bowl',
    id: 'e7af1b38b8d0403e839233b6d007846f'
  },
  {
    name: 'rallador',
    id: 'ed14d5b8dfcb47c6aaa785c20168e719'
  },
  {
    name: 'espatula',
    id: 'e386a0f7e8164506970c76f066fae2c6'
  },
  {
    name: 'colador',
    id: '62250e15e0ee49b088b95a9d1a184b89'
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
  }
  const utencilComponents = getUtencilComponents(utencils, checkedUtencils, handleUtencilCheck)

  useEffect(async () => {
    const response = utencilsMock // TODO: Call API.
    setUtencils(response)
  }, [utencils])

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
                  <input className='inputStep' type='textbox' placeholder='Pasos a seguir' name='' id='' />
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
