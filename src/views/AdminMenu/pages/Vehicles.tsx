import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Vehicle.css'

import { EventManager } from '../../../util/eventmanager.ts'

interface IVehicle {
  id: number,
  name: string,
}

const Vehicles = () => {
  const exampleVehicles = [
    {
      id: 34,
      name: 'Benefactor S34',
    },
    {
      id: 87,
      name: 'Kristiano Mobile Electro',
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allVehicles, setAllVehicles] = useState<IVehicle[]>(exampleVehicles)
  const [foundVehicle, setFoundVehicle] = useState<IVehicle | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)

  useEffect(() => {
    const foundVehicleHandler = (data: IVehicle[]) => {
      if (data.length > 0) {
        setAllVehicles(data)
      } else {
        setAllVehicles([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundVehicles', foundVehicleHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundVehicles', foundVehicleHandler)
  }, [])

  const handleSearchVehicle = () => {
    const searchId = parseInt(searchInp, 10)
    const found = allVehicles.find(vehicle => vehicle.id === searchId)

    if (found) {
      setFoundVehicle(found)
    } else {
      setFoundVehicle(null)
    }

    setIsSearched(true)
  }

  const handleTeleportToVehicle = (id: number) => {
    mp.trigger('cef:adminMenu:tpToVehicle', id)
  }

  const handleTeleportMeVehicle = (id: number) => {
    mp.trigger('cef:adminMenu:tpMeVehicle', id)
  }

  let content
  if (isSearched && foundVehicle === null) {
    setIsSearched(false)
    content = (
      <span className="no-found">Данный транспорт не найден!</span>
    )
  } else if (foundVehicle) {
    content = (
      <ul className="list-vehicles">
        <li className="vehicle-item">
          <span className="name">{foundVehicle.name} <span>[ {foundVehicle.id} ]</span></span>
          <div className="btns">
            <button onClick={() => handleTeleportMeVehicle(foundVehicle.id)}>Телепортировать к себе</button>
            <button onClick={() => handleTeleportToVehicle(foundVehicle.id)}>Телепортироваться</button>
          </div>
        </li>
      </ul>
  )
  } else {
    content = (
      <ul className="list-vehicles">
        { allVehicles.map((vehicle, index) => (
          <li className="vehicle-item" key={index}>
            <span className="name">{vehicle.name} <span>[ {vehicle.id} ]</span></span>
            <div className="btns">
              <button onClick={() => handleTeleportMeVehicle(vehicle.id)}>Телепортировать к себе</button>
              <button onClick={() => handleTeleportToVehicle(vehicle.id)}>Телепортироваться</button>
            </div>
          </li>
        )) }
      </ul>
    )
  }

  return(
    <>
      <div className="vehicles">
        <div className="header">
          <span className="name">Транспорт</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите ID транспорта...'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="btn-search" onClick={handleSearchVehicle}>Найти</button>
          </div>
          { content }
        </div>
      </div>
    </>
  )
}

export default Vehicles