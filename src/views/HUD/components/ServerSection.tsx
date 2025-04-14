import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import { debounce } from 'lodash';
import '../assets/styles/compiled-css/ServerSection.css'
import { questsData } from '../../../configs/HUD/quests.data'
import { weaponsData } from '../../../configs/HUD/weapons.data'

import { EventManager } from '../../../util/eventmanager.ts' 

import SVG_online from '../assets/img/ServerSection/online.svg'
import SVG_sid from '../assets/img/ServerSection/sid.svg'
import SVG_logotype from '../assets/img/ServerSection/logotype.svg'
import SVG_location from '../assets/img/ServerSection/location.svg'

const ServerSection = () => {
  const online = useSelector((state: RootState) => state.onlineReducer)
  const sid = useSelector((state: RootState) => state.sidReducer)
  const activeQuest = useSelector((state: RootState) => state.activeQuestReducer)
  const activeWeapon = useSelector((state: RootState) => state.activeWeaponReducer)
  const activeWeaponHash = useSelector((state: RootState) => state.activeWeaponReducer.hashWeapon)

  const dispatch = useDispatch();

  const [showQuest, setShowQuest] = useState<boolean>(true)

  /* useEffect(() => {
    const hudl = (value: {type: any}) =>{
          setShowQuest(value.type.showQuest)
          dispatch({type: 'SET_ACTIVE_QUEST', 
            nameQuest: value.type.questTitle, descriptionQuest: value.type.questText, questDesc: value.type.questDesc })
            value.type.showAmmo ? dispatch({type: 'SHOW_WEAPON',  
            isVisible: value.type.showAmmo,
            hashWeapon: value.type.currentAmmo,
            clipAmmo: value.type.curremtAmmoInClip,
            allAmmo: value.type.ammoCount
          }) : dispatch({type: 'HIDE_WEAPON'})
          dispatch({type: 'SET_ONLINE', payload: value.type.online})
          dispatch({type: 'SET_SID', payload: value.type.static})
    }
    EventManager.addHandler('hudl', hudl);
    return () => EventManager.removeHandler( 'hudl', hudl );
  }, []) */



  const hudl = useCallback((value: { type: { showQuest: boolean | ((prevState: boolean) => boolean); questTitle: any; questText: any; questDesc: any; showAmmo: any; currentAmmo: any; curremtAmmoInClip: any; ammoCount: any; online: any; static: any } }) => {
    setShowQuest(value.type.showQuest);

    const questTitle = useMemo(() => value.type.questTitle, [value.type.questTitle]);
    const questText = useMemo(() => value.type.questText, [value.type.questText]);
    const questDesc = useMemo(() => value.type.questDesc, [value.type.questDesc]);

    const activeQuestPayload = {
        nameQuest: questTitle,
        descriptionQuest: questText,
        questDesc: questDesc,
    };

    const weaponPayload = value.type.showAmmo
        ? {
            isVisible: value.type.showAmmo,
            hashWeapon: value.type.currentAmmo,
            clipAmmo: value.type.curremtAmmoInClip,
            allAmmo: value.type.ammoCount,
          }
        : {};

    dispatch({ type: 'SET_ACTIVE_QUEST', ...activeQuestPayload });
    
    if (value.type.showAmmo) {
        dispatch({ type: 'SHOW_WEAPON', ...weaponPayload });
    } else {
        dispatch({ type: 'HIDE_WEAPON' });
    }

    dispatch({ type: 'SET_ONLINE', payload: value.type.online });
    dispatch({ type: 'SET_SID', payload: value.type.static });
}, [dispatch]);

useEffect(() => {
    EventManager.addHandler('hudl', hudl);
    return () => EventManager.removeHandler('hudl', hudl);
}, [hudl]);

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
        { showQuest && (
          <div className="quests">
            <div className="header-block">
              <span className="title-quest">{ activeQuest.nameQuest }</span>
              <div className="to-location" ><img src={SVG_location} /></div>
            </div>
            <span className="description-quest">{ activeQuest.descriptionQuest }</span>
            <span className="description-quest">{ activeQuest.questDesc }</span>
          </div>
        ) }
        { activeWeapon.isVisible && (
          <div className="weapon">
            <div className="ammo-block">
              <span className="clip-ammo">{activeWeapon.clipAmmo}</span>
              <span className="all-ammo">{activeWeapon.allAmmo}</span>
            </div>
            <div className="img-block">
              <div className="effect"></div>
              <img src={`/assets/img/weapons/${activeWeapon.hashWeapon}.webp`} className="weapon-img" />
            </div>
          </div>
        ) }
      </div>
    </>
  )
}

export default ServerSection