import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Crime.css'

import { EventManager } from '../../../util/eventmanager.ts'
import { useModal } from '../hooks/useModal.tsx' 

import svg_change from './assets/img/Crime/change.svg' 

interface ICrime {
  name: string,
  id: number,
  leader: string,
  allStaff: number,
  onlineStaff: number,
  moneyCrime: string,
  countAmmo: string,
  countGuns: string,
  dryRations: string,
  medication: string,
  materials: string
}

const Crime = () => {
  const exampleCrime = [
    {
      name: "The Families Gang",
      id: 1,
      leader: "Patriot Adminov",
      allStaff: 50,
      onlineStaff: 23,
      moneyCrime: '$ 12 456 970',
      countAmmo: '12 000 шт.',
      countGuns: '340 шт.',
      dryRations: '973 шт.',
      medication: '234 шт.',
      materials: '24 870 шт.'
    },
    {
      name: "The Vagos Gang",
      id: 2,
      leader: "Kristian Adminov",
      allStaff: 50,
      onlineStaff: 23,
      moneyCrime: '$ 12 456 970',
      countAmmo: '12 000 шт.',
      countGuns: '340 шт.',
      dryRations: '973 шт.',
      medication: '234 шт.',
      materials: '24 870 шт.'
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allCrime, setAllCrime] = useState<ICrime[]>(exampleCrime)
  const [foundCrime, setFoundCrime] = useState<ICrime | null>(null)
  const [opensCrime, setOpensCrime] = useState<number | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)
  const { handleModalOpen, ModalComponent } = useModal()

  const crimeLabels: { [key in keyof ICrime]: string } = {
    name: 'Название организации',
    id: 'ID организации',
    leader: 'Лидер организации',
    allStaff: 'Количество состава',
    onlineStaff: 'Состава онлайн',
    moneyCrime: 'Денег на счёте',
    countAmmo: 'Боеприпасы',
    countGuns: 'Оружие',
    dryRations: 'Сухпайки',
    medication: 'Медикаменты',
    materials: 'Материалы'
  }

  useEffect(() => {
    const foundCrimeHandler = (data: ICrime[]) => {
      if (data.length > 0) {
        setAllCrime(data)
      } else {
        setAllCrime([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundCrime', foundCrimeHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundFraction', foundCrimeHandler)
  }, [])

  const handleSearchCrime = () => {
    if (!searchInp.trim()) {
      setIsSearched(false)
      setFoundCrime(null)
      setAllCrime(exampleCrime)
      return
    }

    const searchId = parseInt(searchInp, 10)
    const found = allCrime.find(crime => 
      crime.name.toLowerCase() === searchInp.toLowerCase() || 
      crime.id === searchId
    )

    setIsSearched(true);

    if (found) {
      setFoundCrime(found)
      setAllCrime(exampleCrime)
    } else {
      setFoundCrime(null)
    }

    setIsSearched(true)
  }

  const toggleOpenCrime = (id: number) => {
    setOpensCrime(prev => (prev === id ? null : id))
  }

  const handleChangeData = (action: string, data?: any) => {
    switch (action) {
      case 'leader':
        handleModalOpen('Лидер', 'crime:leader', [{ name: 'ID игрока' }], 'Выдать лидерку', data)
        break;
      case 'moneyCrime':
         handleModalOpen('Деньги', 'crime:moneyFraction', [{ name: 'Количество денег' }], 'Выдать деньги', data)
        break;
      case 'countAmmo':
        handleModalOpen('Боеприпасы', 'crime:countAmmo', [{ name: 'Количество боеприпасов' }], 'Выдать боеприпасы', data)
        break;
      case 'countGuns':
        handleModalOpen('Оружие', 'crime:countGuns', [{ name: 'Количество оружия' }], 'Выдать оружие', data)
        break;
      case 'dryRations':
        handleModalOpen('Сухпайки', 'crime:dryRations', [{ name: 'Количество сухпайков' }], 'Выдать сухпайки', data)
        break;
      case 'medication':
        handleModalOpen('Сухпайки', 'crime:medication', [{ name: 'Количество медикаментов' }], 'Выдать медикаменты', data)
        break;
      case 'materials':
        handleModalOpen('Материалы', 'crime:materials', [{ name: 'Количество материалов' }], 'Выдать материалы', data)
        break;
      default: 
        return null
    }
  }

  const ignoreParams = ['id', 'allStaff', 'onlineStaff']

  let content
  if (isSearched && foundCrime === null) {
    content = (
      <span className="no-found">Данная организация не найдена!</span>
    )
  } else if (foundCrime) {
    content = (
      <ul className="list-crime">
        <li className="crime-item">
          <div className="header-crime-item">
            <span className="name">{foundCrime.name}</span>
            <button className="openning" onClick={() => toggleOpenCrime(foundCrime.id)}>{opensCrime === foundCrime.id ? 'Свернуть' : 'Развернуть'}</button>
          </div>
          { opensCrime === foundCrime.id && (
              <ul className="list-params">
              { Object.entries(foundCrime).map(([key, value]) => {
                if (key === 'name') return null
                return(
                  <li className="param">
                    <span>{crimeLabels[key as keyof ICrime]}</span>
                    <div className="right-info">
                      <span>{value}</span>
                      { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                        <img src={svg_change} className="change"
                          onClick={() => handleChangeData(key, foundCrime.id)}
                        /> 
                      ) }
                    </div>
                  </li>
                )
              }) }
            </ul>
          )}
        </li>
      </ul>
  )
  } else {
    content = (
      <ul className="list-crime">
        { allCrime.map((crime, index) => (
          <li className="crime-item" key={index}>
            <div className="header-crime-item">
              <span className="name">{crime.name}</span>
              <button className="openning" onClick={() => toggleOpenCrime(crime.id)}>{opensCrime === crime.id ? 'Свернуть' : 'Развернуть'}</button>
            </div>
            { opensCrime === crime.id && (
                <ul className="list-params">
                { Object.entries(crime).map(([key, value]) => {
                  if (key === 'name') return null
                  return(
                    <li className="param">
                      <span>{crimeLabels[key as keyof ICrime]}</span>
                      <div className="right-info">
                        <span>{value}</span>
                        { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                          <img src={svg_change} className="change"
                            onClick={() => handleChangeData(key, crime.id)}
                          /> 
                        ) }
                      </div>
                    </li>
                  )
                }) }
              </ul>
            )}
          </li>
        )) }
      </ul>
    )
  }

  return(
    <>
      <div className="crime">
        <div className="header">
          <span className="name">Крайм</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите название или ID crime-организации...'
              value={searchInp}
              onChange={(e) => {
                setSearchInp(e.target.value)
                if (isSearched) {
                  setIsSearched(false)
                  setFoundCrime(null)
                }
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchCrime()}
            />
            <button className="btn-search" onClick={handleSearchCrime}>Найти</button>
          </div>
          { content }
        </div>
      </div>
      { ModalComponent }
    </>
  )
}

export default Crime