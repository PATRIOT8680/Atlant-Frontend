import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Fraction.css'

import { EventManager } from '../../../util/eventmanager.ts'
import { useModal } from '../hooks/useModal.tsx' 

import svg_change from './assets/img/Fractions/change.svg' 

interface IFraction {
  name: string,
  id: number,
  leader: string,
  allStaff: number,
  onlineStaff: number,
  moneyFraction: string,
  countAmmo: string,
  countGuns: string,
  dryRations: string,
  medication: string,
  materials: string
}

const Fraction = () => {
  const exampleFractions = [
    {
      name: "LSPD",
      id: 1,
      leader: "Patriot Adminov",
      allStaff: 50,
      onlineStaff: 23,
      moneyFraction: '$ 12 456 970',
      countAmmo: '12 000 шт.',
      countGuns: '340 шт.',
      dryRations: '973 шт.',
      medication: '234 шт.',
      materials: '24 870 шт.'
    },
    {
      name: "EMS",
      id: 2,
      leader: "Patriot Adminov",
      allStaff: 50,
      onlineStaff: 23,
      moneyFraction: '$ 12 456 970',
      countAmmo: '12 000 шт.',
      countGuns: '340 шт.',
      dryRations: '973 шт.',
      medication: '234 шт.',
      materials: '24 870 шт.'
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allFractions, setAllFractions] = useState<IFraction[]>(exampleFractions)
  const [foundFraction, setFoundFraction] = useState<IFraction | null>(null)
  const [opensFraction, setOpensFraction] = useState<number | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)
  const { handleModalOpen, ModalComponent } = useModal()

  const fractionLabels: { [key in keyof IFraction]: string } = {
    name: 'Название фракции',
    id: 'ID фракции',
    leader: 'Лидер фракции',
    allStaff: 'Количество состава',
    onlineStaff: 'Состава онлайн',
    moneyFraction: 'Денег на счёте',
    countAmmo: 'Боеприпасы',
    countGuns: 'Оружие',
    dryRations: 'Сухпайки',
    medication: 'Медикаменты',
    materials: 'Материалы'
  }

  useEffect(() => {
    const foundFractionHandler = (data: IFraction[]) => {
      if (data.length > 0) {
        setAllFractions(data)
      } else {
        setAllFractions([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundFraction', foundFractionHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundFraction', foundFractionHandler)
  }, [])

  const handleSearchFraction = () => {
    if (!searchInp.trim()) {
      setIsSearched(false)
      setFoundFraction(null)
      setAllFractions(exampleFractions)
      return
    }

    const searchId = parseInt(searchInp, 10)
    const found = allFractions.find(frac => 
      frac.name.toLowerCase() === searchInp.toLowerCase() || 
      frac.id === searchId
    )

    setIsSearched(true)

    if (found) {
      setFoundFraction(found)
    } else {
      setFoundFraction(null)
    }

    setIsSearched(true)
  }

  const toggleOpenFraction = (id: number) => {
    setOpensFraction(prev => (prev === id ? null : id))
  }

  const handleChangeData = (action: string, data?: any) => {
    switch (action) {
      case 'leader':
        handleModalOpen('Лидер', 'fraction:leader', [{ name: 'ID игрока' }], 'Выдать лидерку', data)
        break;
      case 'moneyFraction':
         handleModalOpen('Деньги', 'fraction:moneyFraction', [{ name: 'Количество денег' }], 'Выдать деньги', data)
        break;
      case 'countAmmo':
        handleModalOpen('Боеприпасы', 'fraction:countAmmo', [{ name: 'Количество боеприпасов' }], 'Выдать боеприпасы', data)
        break;
      case 'countGuns':
        handleModalOpen('Оружие', 'fraction:countGuns', [{ name: 'Количество оружия' }], 'Выдать оружие', data)
        break;
      case 'dryRations':
        handleModalOpen('Сухпайки', 'fraction:dryRations', [{ name: 'Количество сухпайков' }], 'Выдать сухпайки', data)
        break;
      case 'medication':
        handleModalOpen('Сухпайки', 'fraction:medication', [{ name: 'Количество медикаментов' }], 'Выдать медикаменты', data)
        break;
      case 'materials':
        handleModalOpen('Материалы', 'fraction:materials', [{ name: 'Количество материалов' }], 'Выдать материалы', data)
        break;
      default: 
        return null
    }
  }

  const ignoreParams = ['id', 'allStaff', 'onlineStaff']

  let content
  if (isSearched && foundFraction === null) {
    content = (
      <span className="no-found">Данная фракция не найдена!</span>
    )
  } else if (foundFraction) {
    content = (
      <ul className="list-fractions">
        <li className="fraction-item">
          <div className="header-frac-item">
            <span className="name">{foundFraction.name}</span>
            <button className="openning" onClick={() => toggleOpenFraction(foundFraction.id)}>{opensFraction === foundFraction.id ? 'Свернуть' : 'Развернуть'}</button>
          </div>
          { opensFraction === foundFraction.id && (
              <ul className="list-params">
              { Object.entries(foundFraction).map(([key, value]) => {
                if (key === 'name') return null
                return(
                  <li className="param">
                    <span>{fractionLabels[key as keyof IFraction]}</span>
                    <div className="right-info">
                      <span>{value}</span>
                      { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                        <img src={svg_change} className="change"
                          onClick={() => handleChangeData(key, foundFraction.id)}
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
      <ul className="list-fractions">
        { allFractions.map((fraction, index) => (
          <li className="fraction-item" key={index}>
            <div className="header-frac-item">
              <span className="name">{fraction.name}</span>
              <button className="openning" onClick={() => toggleOpenFraction(fraction.id)}>{opensFraction === fraction.id ? 'Свернуть' : 'Развернуть'}</button>
            </div>
            { opensFraction === fraction.id && (
                <ul className="list-params">
                { Object.entries(fraction).map(([key, value]) => {
                  if (key === 'name') return null
                  return(
                    <li className="param">
                      <span>{fractionLabels[key as keyof IFraction]}</span>
                      <div className="right-info">
                        <span>{value}</span>
                        { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                          <img src={svg_change} className="change"
                            onClick={() => handleChangeData(key, fraction.id)}
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
      <div className="fraction">
        <div className="header">
          <span className="name">Фракции</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите название или ID фракции...'
              value={searchInp}
              onChange={(e) => {
                setSearchInp(e.target.value)
                if (isSearched) {
                  setIsSearched(false)
                  setFoundFraction(null)
                }
              }}
              onKeyDown={(e) => e.key === 'Enter' && handleSearchFraction()}
            />
            <button className="btn-search" onClick={handleSearchFraction}>Найти</button>
          </div>
          { content }
        </div>
      </div>
      { ModalComponent }
    </>
  )
}

export default Fraction