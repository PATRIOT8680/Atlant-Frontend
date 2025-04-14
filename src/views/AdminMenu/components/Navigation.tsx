import { FC } from "react"
import { useDispatch } from "react-redux"
import './assets/styles/compiled-css/Navigation.css'

import { hideAdminMenu } from "../../../actions/menus/adminMenu"

import icon from './assets/img/header/icon.svg'
import svg_reports from './assets/img/tabs/reports.svg'
import svg_player from './assets/img/tabs/player.svg'
import svg_fraction from './assets/img/tabs/fraction.svg'
import svg_houses from './assets/img/tabs/houses.svg'
import svg_families from './assets/img/tabs/families.svg'
import svg_crime from './assets/img/tabs/crime.svg'
import svg_vehicle from './assets/img/tabs/vehicle.svg'
import svg_teleport from './assets/img/tabs/teleport.svg'
import svg_issue from './assets/img/tabs/issue.svg'
import svg_developer from './assets/img/tabs/developer.svg'


interface INavigation {
  onTabChange: (tab: string) => void,
  selectedTab: string
}

const Navigation: FC<INavigation> = ({ onTabChange, selectedTab }) => {
  const dispatch = useDispatch()

  return(
    <>
      <div className="navigation">
        <div className="header">
          <img src={icon} className="icon" />
          <span>Admin Menu</span>
        </div>

        <div className="btns-list">
          <button className={`tab-btn ${selectedTab === 'reports' ? 'selected' : ''}`} onClick={() => onTabChange('reports')}>
            <div className="left-content">
              <img src={svg_reports} className="icon-tab" />
              <span className="text">Репорты</span>
            </div>
            { selectedTab === 'reports' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'player' ? 'selected' : ''}`} onClick={() => onTabChange('player')}>
            <div className="left-content">
              <img src={svg_player} className="icon-tab" />
              <span className="text">Игроки</span>
            </div>
            { selectedTab === 'player' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'fraction' ? 'selected' : ''}`} onClick={() => onTabChange('fraction')}>
            <div className="left-content">
              <img src={svg_fraction} className="icon-tab" />
              <span className="text">Фракции</span>
            </div>
            { selectedTab === 'fraction' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'homes' ? 'selected' : ''}`} onClick={() => onTabChange('homes')}>
            <div className="left-content">
              <img src={svg_houses} className="icon-tab" />
              <span className="text">Дома</span>
            </div>
            { selectedTab === 'homes' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'families' ? 'selected' : ''}`} onClick={() => onTabChange('families')}>
            <div className="left-content">
              <img src={svg_families} className="icon-tab" />
              <span className="text">Семьи</span>
            </div>
            { selectedTab === 'families' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'crime' ? 'selected' : ''}`} onClick={() => onTabChange('crime')}>
            <div className="left-content">
              <img src={svg_crime} className="icon-tab" />
              <span className="text">Крайм</span>
            </div>
            { selectedTab === 'crime' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'vehicle' ? 'selected' : ''}`} onClick={() => onTabChange('vehicle')}>
            <div className="left-content">
              <img src={svg_vehicle} className="icon-tab" />
              <span className="text">Транспорт</span>
            </div>
            { selectedTab === 'vehicle' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'teleport' ? 'selected' : ''}`} onClick={() => onTabChange('teleport')}>
            <div className="left-content">
              <img src={svg_teleport} className="icon-tab" />
              <span className="text">Телепорт</span>
            </div>
            { selectedTab === 'teleport' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'issue' ? 'selected' : ''}`} onClick={() => onTabChange('issue')}>
            <div className="left-content">
              <img src={svg_issue} className="icon-tab" />
              <span className="text">Меню выдачи</span>
            </div>
            { selectedTab === 'issue' && <ellipse></ellipse> }
          </button>
          <button className={`tab-btn ${selectedTab === 'developer' ? 'selected' : ''}`} onClick={() => onTabChange('developer')}>
            <div className="left-content">
              <img src={svg_developer} className="icon-tab" />
              <span className="text">Разработчикам</span>
            </div>
            { selectedTab === 'developer' && <ellipse></ellipse> }
          </button>
        </div>

        <button className='exit-btn' onClick={() => dispatch(hideAdminMenu())}>
          <span className="esc">ESC</span>
          <span className="text">Выйти</span>
        </button>

      </div>
    </>
  )
}

export default Navigation