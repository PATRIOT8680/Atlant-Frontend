import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Teleport.css'

import { EventManager } from '../../../util/eventmanager.ts'

interface ICoords {
  x: number,
  y: number,
  z: number
}

interface ITeleport {
  id: number,
  name: string,
  coords?: ICoords
}

const Teleport = () => {
  const exampleTeleports = [
    {
      id: 5,
      name: 'Чёрный рынок #1',
      coords: { x: 1345.230, y: 933.382, z: 1023.837 }
    },
    {
      id: 7,
      name: 'Чёрный рынок #2',
      coords: { x: 1345.230, y: 933.382, z: 1023.837 }
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allTeleports, setAllTeleports] = useState<ITeleport[]>(exampleTeleports)
  const [foundTeleport, setFoundTeleport] = useState<ITeleport | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)

  useEffect(() => {
    const foundTeleportHandler = (data: ITeleport[]) => {
      if (data.length > 0) {
        setAllTeleports(data)
      } else {
        setAllTeleports([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundTeleports', foundTeleportHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundTeleports', foundTeleportHandler)
  }, [])

  const handleSearchTeleport = () => {
    const searchId = parseInt(searchInp, 10)
    const found = allTeleports.find(tp =>
      tp.name.toLowerCase() === searchInp.toLowerCase() || 
      tp.id === searchId
    )

    if (found) {
      setFoundTeleport(found)
    } else {
      setFoundTeleport(null)
    }

    setIsSearched(true)
  }

  const handleTeleport = (coords: ICoords) => {
    mp.trigger('cef:adminMenu:teleport', coords)
  }

  let content
  if (isSearched && foundTeleport === null) {
    setIsSearched(false)
    content = (
      <span className="no-found">Данная точка телепорта не найдена!</span>
    )
  } else if (foundTeleport) {
    content = (
      <ul className="list-teleports">
        <li className="teleport-item">
          <span className="name">{foundTeleport.name} <span>(id: {foundTeleport.id})</span></span>
          <button onClick={() => foundTeleport.coords && handleTeleport(foundTeleport.coords)}>Телепортироваться</button>
        </li>
      </ul>
  )
  } else {
    content = (
      <ul className="list-teleports">
        { allTeleports.map((tp, index) => (
          <li className="teleport-item" key={index}>
            <span className="name">{tp.name} <span>(id: {tp.id})</span></span>
            <button onClick={() => tp.coords && handleTeleport(tp.coords)}>Телепортироваться</button>
          </li>
        )) }
      </ul>
    )
  }

  return(
    <>
      <div className="teleport">
        <div className="header">
          <span className="name">Телепорт</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите название или id точки телепорта...'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="btn-search" onClick={handleSearchTeleport}>Найти</button>
          </div>
          { content }
        </div>
      </div>
    </>
  )
}

export default Teleport