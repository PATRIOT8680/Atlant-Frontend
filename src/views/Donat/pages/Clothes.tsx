import { useEffect, useRef, useState } from 'react'
import './assets/styles/compiled-css/Clothes.css'
import { clothesData } from '../../../configs/Donat/clothes.data'

import Acoins_green from './assets/img/Clothes/acoins.svg'

const Clothes = () => {
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
      <ul className="clothes">
        { clothesData.map((cloth, index) => (

          <li className="cloth" id={cloth.shortName} key={index} onMouseEnter={handleMouseHover}>
            <div className="content-inside">
              <div className="header-title">
                <span className="name-clothes">{cloth.fullName}</span>
                <span className="price">{cloth.price} <img src={Acoins_green} /></span>
              </div>
              <div className="image-block">
                <img src={`src/assets/img/donat/clothes.image/${cloth.shortName}.png`} />
                <div className="circle"></div>
              </div>
              <button className="buy-clothes" onClick={handleBuy}>Приобрести за {cloth.price} AC</button>
            </div>
          </li>

        )) }
      </ul>
    </>
  )
}

export default Clothes