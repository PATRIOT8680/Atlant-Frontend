import { useEffect, useRef, useState } from 'react'
import './assets/styles/compiled-css/VIP.css'
import { vipsData } from "../../../configs/Donat/vips.data"

import Acoins_green from './assets/img/VIP/acoins-green.svg'

const VIP = () => {
  const [soundHover, setSoundHover] = useState<Howl | null>(null)
  const [soundBtn, setSoundBtn] = useState<Howl | null>(null)
  const soundRefHover = useRef<Howl | null>(null)
  const soundRefClick = useRef<Howl | null>(null)

  useEffect(() => {
    soundRefHover.current = new Howl({
      src: ['src/views/Donat/pages/assets/audio/sound-hover.wav']
    })

    soundRefClick.current = new Howl({
      src: ['src/views/Donat/pages/assets/audio/sound-btn.wav']
    })

    setSoundHover(soundRefHover.current)
    setSoundBtn(soundRefClick.current)
  }, [])

  const handleMouseHover = () => {
    if(soundHover) {
      soundHover.volume(0.5)
      soundHover.play()
    }
  }

  const handleMouseClick = () => {
    if(soundBtn) {
      soundBtn.volume(0.5)
      soundBtn.play()
    }
  }
  
  const handleBuy = () => {
    handleMouseClick()
  }

  return(
    <>
      <div className="vips">
        { vipsData.map((vip, index) => (

          <div className="vip" id={vip.shortName} key={index} onMouseEnter={handleMouseHover}>
            <img 
              className='person-img'
              src={`src/assets/img/donat/vip.persons/${vip.shortName}.png`}
            />
            <div className="content-inside">
              <div className="header-title">
                <span className="name-vip">{vip.fullName}</span>
                <span className="price">
                  {vip.price}
                  <img className="acoins" src={Acoins_green}/>
                </span>
              </div>
              <div className="privileges">
                <span className="title">Привелегии</span>
                <ul className="list-privileges">
                  { vip.privileges.map((privilege, index) => (

                    <li className="privilege" key={index}>
                      <span className="name">{privilege.name}</span>
                      <span className="value">{privilege.value}</span>
                    </li>

                  )) }
                </ul>
              </div>
              <button className="buy-vip" onClick={handleBuy}>Приобрести за {vip.price} AC</button>
            </div>
          </div>

        )) }
      </div>
    </>
  )
}

export default VIP