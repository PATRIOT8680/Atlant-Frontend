import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import '../assets/styles/compiled-css/ServerSection.css'
import { questsData } from '../../../configs/HUD/quests.data'
import { weaponsData } from '../../../configs/HUD/weapons.data'

import SVG_online from '../assets/img/ServerSection/online.svg'
import SVG_sid from '../assets/img/ServerSection/sid.svg'
import SVG_logotype from '../assets/img/ServerSection/logotype.svg'

const ServerSection = () => {
  const online = useSelector((state: RootState) => state.onlineReducer)
  const sid = useSelector((state: RootState) => state.sidReducer)
  const activeQuest = useSelector((state: RootState) => state.activeQuestReducer)
  const activeWeapon = useSelector((state: RootState) => state.activeWeaponReducer)
  const activeWeaponHash = useSelector((state: RootState) => state.activeWeaponReducer.hashWeapon)

  return(
    <>
      <div style={{zoom: '88%'}} className="server-section">
        <div className="server-info">
          <div className="statistics">
            <div className="block-stat">
              <div className="icon"><img src={SVG_online} /></div>
              <span className="text">{online}</span>
            </div>
            <div className="block-stat">
              <div className="icon"><img src={SVG_sid} /></div>
              <span className="text">{sid}</span>
            </div>
          </div>
          <img src={SVG_logotype} className="logotype-project" />
        </div>
        { activeQuest && (
          <div className="quests">
            <div className="header-block">
              <span className="title-quest">{ activeQuest.nameQuest }</span>
            </div>
            <span className="description-quest">{ activeQuest.descriptionQuest }</span>
          </div>
        ) }
        { activeWeaponHash && (
          <div className="weapon">
            <div className="ammo-block">
              <span className="clip-ammo">{activeWeapon.clipAmmo}</span>
              <span className="all-ammo">{activeWeapon.allAmmo}</span>
            </div>
            <div className="img-block">
              <div className="effect"></div>
              <img src={`src/assets/img/weapons/${activeWeapon.hashWeapon}.webp`} className="weapon-img" />
            </div>
          </div>
        ) }
      </div>
    </>
  )
}

export default ServerSection