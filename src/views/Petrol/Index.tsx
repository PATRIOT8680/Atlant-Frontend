import { useEffect, useState, createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './assets/styles/compiled-css/Index.css'

import LTD from './elements/LTD'
import Shop from './elements/Shop'

export const PetrolIndexContext = createContext('')

const Petrol = () => {
  const navigate = useNavigate()
  const [selectedPetrolName] = useState('LTD')

  useEffect(() => {
    const handleCloseMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/hud')
      }
    }

    window.addEventListener('keydown', handleCloseMenu)
    return () => window.removeEventListener('keydown', handleCloseMenu)
  }, [navigate])

  /* Получение данных с backend */
  //useEffect(() => {
  //  fetch('api/petrol', {
  //    method: 'GET'
  //  })
  //    .then((response) => response.json)
  //    .then((data) => {
  //      setSelectedPetrolName()
  //    })
  //})

  return(
    <>
      <div className="petrol">
        <span className='esc' onClick={() => navigate('/hud')}>ESC</span>
        <div className="containers">
          <PetrolIndexContext.Provider value={selectedPetrolName}>
            <LTD />
            <Shop />
          </PetrolIndexContext.Provider>
        </div>
      </div>
    </>
  )
}

export default Petrol