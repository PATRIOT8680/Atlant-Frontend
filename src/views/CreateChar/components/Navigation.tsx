import { FC } from 'react'
import './styles/compiled-css/Navigation.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'

import GenSVG from '../assets/img/Navigation/gen.svg'
import FaceSVG from '../assets/img/Navigation/face.svg'
import HairSVG from '../assets/img/Navigation/hair.svg'
import SkinSVG from '../assets/img/Navigation/skins.svg'
import ClothesSVG from '../assets/img/Navigation/clothes.svg'

interface INavProps {
  onTabChange: (tab: string) => void,
  selectedTab: string
}

const NavigationCreateChar: FC<INavProps> = ({ selectedTab, onTabChange }) => {

  const genState = useSelector((state: RootState) => state.characterReducer.gen)
  

  return (
    <>
      <div className="navigation-create-char">
        <div className={`nav-wrapper ${selectedTab === 'gen' ? 'select' : ''}`} onClick={() => onTabChange('gen')}>
          <img src={GenSVG}/>
          <div className="text-block">
            <span className="title">Генетика</span>
            <span className="description">От вашей генетики зависит ваша внешность персонажа</span>
          </div>
        </div>

        <div className={`nav-wrapper ${selectedTab === 'face' ? 'select' : ''}`} onClick={() => onTabChange('face')}>
          <img src={FaceSVG}/>
          <div className="text-block">
            <span className="title">Основное</span>
            <span className="description">Залог отличительного персонажа - его особенная характеристика</span>
          </div>
        </div>

        <div className={`nav-wrapper ${selectedTab === 'hair' ? 'select' : ''}`} onClick={() => onTabChange('hair')}>
          <img src={HairSVG}/>
          <div className="text-block">
            <span className="title">Волосы</span>
            <span className="description">Стань волосатым орагутаном или лысым Домиником</span>
          </div>
        </div>

        <div className={`nav-wrapper ${selectedTab === 'clothes' ? 'select' : ''}`} onClick={() => onTabChange('clothes')}>
          <img src={ClothesSVG}/>
          <div className="text-block">
            <span className="title">Одежда</span>
            <span className="description">Преобрази своего персонажа на максимум, модник</span>
          </div>
        </div>
     {/*    <button className='btn-create-char' onClick={createUser}>Создать персонажа</button> */}
      </div>
    </>
  )
}

export {NavigationCreateChar}