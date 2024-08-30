import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cashReducer } from '../../../reducer/cash'
import { RootState } from '../../../reducer/rootReducer'
import '../assets/styles/compiled-css/MinimapSection.css'

import SVG_water from '../assets/img/MinimapSection/water.svg'
import SVG_burger from '../assets/img/MinimapSection/burger.svg'
import SVG_dollar from '../assets/img/MinimapSection/dollar.svg'
import SVG_microphone from '../assets/img/MinimapSection/microphone.svg'
import SVG_location from '../assets/img/MinimapSection/location.svg'

const MinimapSection = () => {
  //const [water, setWater] = useState<number>(50)
  //const [eat, setEat] = useState<number>(90)
  //const [zone, setZone] = useState<string>('danger')
  //const [cash, setCash] = useState<number>(8750)
  //const [microphoneActive, setMicrophoneActive] = useState<boolean>(true)
  //const [district, setDistrict] = useState<string>('Ричман')
  //const [street, setStreet] = useState<string>('Норт-Рокфорд-Драйв')

  const eat = useSelector((state: RootState) => state.eatReducer)
  const water = useSelector((state: RootState) => state.waterReducer)
  const cash = useSelector((state: RootState) => state.cashReducer)
  const zone = useSelector((state: RootState) => state.inZoneReducer)
  const district = useSelector((state: RootState) => state.inDistrictReducer)
  const street = useSelector((state: RootState) => state.inStreetReducer)
  const microphoneActive = useSelector((state: RootState) => state.microphoneActive)

  return(
    <>
      <div className="minimap-section">
        <div className="minimap-block">
          <div className="needs">
            <div className="block-need" id='water'>
              <div className="icon"><img src={SVG_water} /></div>
              <div className="progress-bar">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect style={{width: `100%`}} rx="4.5" fill="#25A4FF" fill-opacity="0.43"/>
                  <rect style={{width: `${water}%`, transition: 'all 1s'}} rx="4.5" fill="#25A4FF"/>
                </svg>
              </div>
            </div>
            <div className="block-need" id='eat'>
              <div className="icon"><img src={SVG_burger} /></div>
              <div className="progress-bar">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect style={{width: `100%`}} rx="4.5" fill="#FF8E3C" fill-opacity="0.43"/>
                  <rect style={{width: `${eat}%`, transition: 'all 1s'}} rx="4.5" fill="#FF8E3C"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="minimap"></div>
        </div>
        <div className="player-info">
          <span className="zone" id={zone}>{zone} ZONE</span>
          <div className="cash-micro">
            <div className="cash">
              <div className="icon">
                <img src={SVG_dollar} />
              </div>
              <span className="text">{cash} $</span>
            </div>
            { microphoneActive ? (
              <div className="microphone">
                <img src={SVG_microphone} />
                <div className="effect"></div>
              </div>
            ) : null }
            
          </div>
          <div className="location">
            <div className="icon"><img src={SVG_location} /></div>
            <div className="block-text">
              <span className="district">{district}</span>
              <span className="street">{street}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MinimapSection