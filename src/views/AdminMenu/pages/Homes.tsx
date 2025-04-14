import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Homes.css'

import { EventManager } from '../../../util/eventmanager.ts'
import { useModal } from '../hooks/useModal.tsx' 

import svg_change from './assets/img/Homes/change.svg' 

interface ICoords {
  x: number,
  y: number,
  z: number
}

interface IHome {
  id: number,
  owner: string,
  price: string,
  address: string,
  settlers: number,
  upgrades: number,
  coords?: ICoords
}

const Homes = () => {
  const exampleHomes = [
    {
      id: 134,
      owner: 'Patriot Adminov',
      price: '$ 12 350 000',
      address: 'Сэнди-Шорс, Сеньор Бич 45',
      settlers: 4,
      upgrades: 1,
      coords: { x: 1345.230, y: 933.382, z: 1023.837 }
    },
    {
      id: 135,
      owner: 'Kristian Adminov',
      price: '$ 12 350 000',
      address: 'Сэнди-Шорс, Сеньор Бич 45',
      settlers: 4,
      upgrades: 1,
      coords: { x: 1345.230, y: 933.382, z: 1023.837 }
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allHomes, setAllHomes] = useState<IHome[]>(exampleHomes)
  const [foundHome, setFoundHome] = useState<IHome | null>(null)
  const [opensHome, setOpensHome] = useState<number | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)
  const { handleModalOpen, ModalComponent } = useModal()

  const homeLabels: { [key in keyof IHome]: string } = {
    id: 'ID дома',
    owner: 'Владелец',
    price: 'Гос. стоимость',
    address: 'Адрес',
    settlers: 'Подселенцы',
    upgrades: 'Улучшения',
  }

  useEffect(() => {
    const foundHomeHandler = (data: IHome[]) => {
      if (data.length > 0) {
        setAllHomes(data)
      } else {
        setAllHomes([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundHome', foundHomeHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundHome', foundHomeHandler)
  }, [])

  const handleSearchHome = () => {
    const searchId = parseInt(searchInp, 10)
    const found = allHomes.find(home => 
      home.owner.toLowerCase() === searchInp.toLowerCase() || 
      home.id === searchId
    )

    if (found) {
      setFoundHome(found)
    } else {
      setFoundHome(null)
    }

    setIsSearched(true)
  }

  const toggleOpenHome = (id: number) => {
    setOpensHome(prev => (prev === id ? null : id))
  }

  const handleTeleportHome = (coords: ICoords) => {
    mp.trigger('cef:adminMenu:teleportToHome', coords)
  }

  const handleChangeData = (action: string, data?: any) => {
    switch (action) {
      case 'price':
        handleModalOpen('Гос. стоимость', 'homes:price', [{ name: 'Новая стоимость' }], 'Изменить стоимость', data)
        break;
      case 'owner':
         handleModalOpen('Владелец', 'homes:owner', [{ name: 'ID игрока' }], 'Сменить владельца', data)
        break;
      case 'settlers':
        handleModalOpen('Подселенцы', 'homes:settlers', [], 'Выселить всех', data)
        break;
      case 'upgrades':
        handleModalOpen('Улучшения', 'homes:upgades', [{ name: 'Кол-во улучшений (макс. 3)' }], 'Улучшить', data)
        break;
      default: 
        return null
    }
  }

  const ignoreParams = ['id', 'address', 'coords']

  let content
  if (isSearched && foundHome === null) {
    setIsSearched(false)
    content = (
      <span className="no-found">Такой дом не найден!</span>
    )
  } else if (foundHome) {
    content = (
      <ul className="list-homes">
        <li className="home-item">
          <div className="header-home-item">
            <span className="name">Дом №{foundHome.id}</span>
            <button className="openning" onClick={() => toggleOpenHome(foundHome.id)}>{opensHome === foundHome.id ? 'Свернуть' : 'Развернуть'}</button>
          </div>
          { opensHome === foundHome.id && (
            <>
              <ul className="list-params">
                { Object.entries(foundHome).map(([key, value]) => {
                  if (key === 'coords') return null
                  return(
                    <li className="param">
                      <span>{homeLabels[key as keyof IHome]}</span>
                      <div className="right-info">
                        <span>{value}</span>
                        { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                          <img src={svg_change} className="change"
                            onClick={() => handleChangeData(key, foundHome.id)}
                          /> 
                        ) }
                      </div>
                    </li>
                  )
                }) }
              </ul>
              <button className="tp-to-home" onClick={() => foundHome.coords && handleTeleportHome(foundHome.coords)}>Телепортироваться к дому</button>
            </>
              
          )}
        </li>
      </ul>
  )
  } else {
    content = (
      <ul className="list-homes">
        { allHomes.map((home, index) => (
          <li className="home-item" key={index}>
            <div className="header-home-item">
              <span className="name">Дом №{home.id}</span>
              <button className="openning" onClick={() => toggleOpenHome(home.id)}>{opensHome === home.id ? 'Свернуть' : 'Развернуть'}</button>
            </div>
            { opensHome === home.id && (
                <>
                  <ul className="list-params">
                    { Object.entries(home).map(([key, value]) => {
                      if (key === 'coords') return null
                      return(
                        <li className="param">
                          <span>{homeLabels[key as keyof IHome]}</span>
                          <div className="right-info">
                            <span>{value}</span>
                            { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                              <img src={svg_change} className="change"
                                onClick={() => handleChangeData(key, home.id)}
                              /> 
                            ) }
                          </div>
                        </li>
                      )
                    }) }
                  </ul>
                  <button className="tp-to-home" onClick={() => home.coords && handleTeleportHome(home.coords)}>Телепортироваться к дому</button>
                </>
            )}
          </li>
        )) }
      </ul>
    )
  }

  return(
    <>
      <div className="homes">
        <div className="header">
          <span className="name">Дома</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите ID дома или владельца...'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="btn-search" onClick={handleSearchHome}>Найти</button>
          </div>
          { content }
        </div>
      </div>
      { ModalComponent }
    </>
  )
}

export default Homes