import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Families.css'

import { EventManager } from '../../../util/eventmanager.ts'
import { useModal } from '../hooks/useModal.tsx' 

import svg_change from './assets/img/Families/change.svg'

interface IFamily {
  id: number,
  name: string,
  lvl: number,
  allStaff: number,
  onlineStaff: number,
  money: string,
}

const Families = () => {
  const exampleFamilies = [
    {
      id: 134,
      name: 'PATRIOT Family',
      lvl: 23,
      allStaff: 245,
      onlineStaff: 34,
      money: '$ 983 234',
    },
    {
      id: 234,
      name: 'Kristian Family',
      lvl: 23,
      allStaff: 245,
      onlineStaff: 34,
      money: '$ 983 234',
    },
  ]

  const [searchInp, setSearchInp] = useState<string>('')
  const [allFamilies, setAllFamilies] = useState<IFamily[]>(exampleFamilies)
  const [foundFamily, setFoundFamily] = useState<IFamily | null>(null)
  const [opensFamily, setOpensFamily] = useState<number | null>(null)
  const [isSearched, setIsSearched] = useState<boolean>(false)
  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)
  const { handleModalOpen, ModalComponent } = useModal()

  const familyLabels: { [key in keyof IFamily]: string } = {
    id: 'ID семьи',
    name: 'Название семьи',
    lvl: 'Уровень семьи',
    allStaff: 'Состав семьи',
    onlineStaff: 'Онлайн состав',
    money: 'Денег на счёте',
  }

  useEffect(() => {
    const foundFamilyHandler = (data: IFamily[]) => {
      if (data.length > 0) {
        setAllFamilies(data)
      } else {
        setAllFamilies([])
      }
    }

    EventManager.addHandler('cef:adminMenu:foundFamily', foundFamilyHandler)
    return () => EventManager.removeHandler('cef:adminMenu:foundFamily', foundFamilyHandler)
  }, [])

  const handleSearchFamily = () => {
    const searchId = parseInt(searchInp, 10)
    const found = allFamilies.find(family => 
      family.name.toLowerCase() === searchInp.toLowerCase() || 
      family.id === searchId
    )

    if (found) {
      setFoundFamily(found)
    } else {
      setFoundFamily(null)
    }

    setIsSearched(true)
  }

  const toggleOpenFamily = (id: number) => {
    setOpensFamily(prev => (prev === id ? null : id))
  }

  const handleChangeData = (action: string, data?: any) => {
    switch (action) {
      case 'lvl':
        handleModalOpen('Уровень семьи', 'families:lvl', [{ name: 'Новый уровень' }], 'Изменить уровень', data)
        break;
      case 'money':
         handleModalOpen('Денег на счёте', 'families:money', [{ name: 'Количество денег' }], 'Выдать деньги', data)
        break;
      default: 
        return null
    }
  }

  const ignoreParams = ['id', 'name', 'allStaff', 'onlineStaff']

  let content
  if (isSearched && foundFamily === null) {
    setIsSearched(false)
    content = (
      <span className="no-found">Семья не найдена!</span>
    )
  } else if (foundFamily) {
    content = (
      <ul className="list-families">
        <li className="family-item">
          <div className="header-family-item">
            <span className="name">Семья "{foundFamily.name}"</span>
            <button className="openning" onClick={() => toggleOpenFamily(foundFamily.id)}>{opensFamily === foundFamily.id ? 'Свернуть' : 'Развернуть'}</button>
          </div>
          { opensFamily === foundFamily.id && (
            <>
              <ul className="list-params">
                { Object.entries(foundFamily).map(([key, value]) => {
                  if (key === 'coords') return null
                  return(
                    <li className="param">
                      <span>{familyLabels[key as keyof IFamily]}</span>
                      <div className="right-info">
                        <span>{value}</span>
                        { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                          <img src={svg_change} className="change"
                            onClick={() => handleChangeData(key, foundFamily.id)}
                          /> 
                        ) }
                      </div>
                    </li>
                  )
                }) }
              </ul>
            </>
              
          )}
        </li>
      </ul>
  )
  } else {
    content = (
      <ul className="list-families">
        { allFamilies.map((family, index) => (
          <li className="family-item" key={index}>
            <div className="header-family-item">
              <span className="name">Семья "{family.name}"</span>
              <button className="openning" onClick={() => toggleOpenFamily(family.id)}>{opensFamily === family.id ? 'Свернуть' : 'Развернуть'}</button>
            </div>
            { opensFamily === family.id && (
                <>
                  <ul className="list-params">
                    { Object.entries(family).map(([key, value]) => {
                      if (key === 'coords') return null
                      return(
                        <li className="param">
                          <span>{familyLabels[key as keyof IFamily]}</span>
                          <div className="right-info">
                            <span>{value}</span>
                            { adminLvl > 6 && !ignoreParams.includes(key) && ( 
                              <img src={svg_change} className="change"
                                onClick={() => handleChangeData(key, family.id)}
                              /> 
                            ) }
                          </div>
                        </li>
                      )
                    }) }
                  </ul>
                </>
            )}
          </li>
        )) }
      </ul>
    )
  }

  return(
    <>
      <div className="families">
        <div className="header">
          <span className="name">Семьи</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите название или ID семьи...'
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <button className="btn-search" onClick={handleSearchFamily}>Найти</button>
          </div>
          { content }
        </div>
      </div>
      { ModalComponent }
    </>
  )
}

export default Families