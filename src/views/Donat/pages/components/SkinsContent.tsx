import { FC, useState, useEffect, useRef } from 'react'
import './assets/styles/compiled-css/SkinsContent.css'
import { skinsData } from '../../../../store/Donat/skins.data'

import Acoins_green from './assets/img/SkinContent/acoins.svg'

interface ISkinsContent {
  selectedCategory: string
}

const SkinsContent: FC<ISkinsContent> = ({ selectedCategory }) => {
  const category = skinsData.find((c) => c.id === selectedCategory)

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
      <div className="skins-content">
        {
          category?.content.map((skin, index) => (
            <div className="skin" key={index} onMouseEnter={handleMouseHover}>
              <div className="content-inside">
                <div className="header-title">
                  <div className="name-block">
                    <span className="text">Скин</span>
                    <span className="name-skin">{skin.fullName}</span>
                  </div>
                  <span className="price">
                    {skin.price}
                    <img src={Acoins_green} />
                  </span>
                </div>
                <img className='skin-img' src={`src/assets/img/donat/skins.content/${skin.shortName}.png`} />
                <button className="buy-skin" onClick={handleBuy}>Приобрести за {skin.price} AC</button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default SkinsContent