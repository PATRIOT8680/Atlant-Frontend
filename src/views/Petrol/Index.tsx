import { useEffect, useState, createContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../reducer/rootReducer'
import { petrolReducer } from '../../reducer/petrol/petrol'
import { hidePetrol } from '../../actions/petrol'
import './assets/styles/compiled-css/Index.css'

import Petrol from './elements/Petrol'
import Shop from './elements/Shop'

export const PetrolIndexContext = createContext({
  selectedPetrolShortName: ''
})

const IndexPetrol = () => {
  const petrolStates = useSelector((state: RootState) => state.petrolReducer)

  const [selectedPetrolShortName, setSelectedPetrolShortName] = useState(petrolStates.petrolType)
  const [selectedVeh, setSelectedVeh] = useState(petrolStates.vehName)
  const [vehFuel, setVehFuel] = useState(petrolStates.vehFuel)
  const [maxFuelVeh, setMaxFuel] = useState(petrolStates.maxFuelVeh)
  const [typePetrolVeh, setTypePetrolVeh] = useState(petrolStates.typePetrolVeh)
  const dispatch = useDispatch()
  

  useEffect(() => {
    const handleCloseMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch(hidePetrol())
      }
    }

    window.addEventListener('keydown', handleCloseMenu)
    return () => window.removeEventListener('keydown', handleCloseMenu)
  }, [])

  return(
    <>
      <div className="index-petrol">
        <span className='esc' onClick={() => dispatch(hidePetrol())}>ESC</span>
        <div className="containers">
          <PetrolIndexContext.Provider 
            value={{
              selectedPetrolShortName
            }}>
            <Petrol selectedVeh={selectedVeh} vehFuel={vehFuel} maxFuel={maxFuelVeh} typePetrolVeh={typePetrolVeh} />
            <Shop />
          </PetrolIndexContext.Provider>
        </div>
      </div>
    </>
  )
}

export default IndexPetrol