import { useEffect, useState, createContext } from 'react'
import { showHud } from '../../actions/hud'
import './assets/styles/compiled-css/Index.css'

import Petrol from './elements/Petrol'
import Shop from './elements/Shop'
import { petrolsName } from '../../configs/Petrol/petrols.data'

export const PetrolIndexContext = createContext({
  selectedPetrolName: '',
  selectedPetrolShortName: ''
})

const IndexPetrol = () => {
  const [selectedPetrolName, setSelectedPetrolName] = useState('Xero Gas') 
  const [selectedPetrolShortName, setSelectedPetrolShortName] = useState('ron')

  useEffect(() => {
    const handleCloseMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        showHud()
      }
    }

    window.addEventListener('keydown', handleCloseMenu)
    return () => window.removeEventListener('keydown', handleCloseMenu)
  }, [])

  /* Получение типа заправки с backend */
  //useEffect(() => {
  //  fetch('api/petrol', {
  //    method: 'GET'
  //  })
  //    .then((response) => response.json())
  //    .then((data) => {
  //      const validPetrol = petrolsName.find(
  //        (petrol) => petrol.shortName === data.shortName
  //      );
  //      if (validPetrol) {
  //        setSelectedPetrolName(validPetrol.name)
  //        setSelectedPetrolShortName(data.shortName)
  //      } else {
  //        console.error(
  //          'Данный тип заправки не существует в petrols.data.ts!'
  //        );
  //      }
  //    })
  //    .catch((err) => {
  //      console.error(`Ошибка при получении данных с сервера: ${err}`)
  //    })
  //}, [])

  return(
    <>
      <div className="index-petrol">
        <span className='esc' onClick={() => showHud()}>ESC</span>
        <div className="containers">
          <PetrolIndexContext.Provider 
            value={{
              selectedPetrolName,
              selectedPetrolShortName
            }}>
            <Petrol />
            <Shop />
          </PetrolIndexContext.Provider>
        </div>
      </div>
    </>
  )
}

export default IndexPetrol