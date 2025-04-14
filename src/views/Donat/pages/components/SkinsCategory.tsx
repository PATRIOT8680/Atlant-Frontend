import { useEffect, useRef, useState, FC } from 'react'
import { skinsData } from '../../../../configs/Donat/skins.data'
import './assets/styles/compiled-css/SkinsCategory.css'

interface ISkinsCategory {
  category: typeof skinsData[number],
  selectedCategory: string,
  setSelectedCategory: (id: string) => void
}

const SkinsCategory: FC<ISkinsCategory> = ({ category, selectedCategory, setSelectedCategory }) => {
  const [soundBtn, setSoundBtn] = useState<Howl | null>(null)
  const soundRefClick = useRef<Howl | null>(null)

  useEffect(() => {
    soundRefClick.current = new Howl({
      src: ['src/views/Donat/pages/assets/audio/sound-btn.wav']
    })

    setSoundBtn(soundRefClick.current)
  }, [])
  
  const handleClick = () => {
    if(soundBtn) {
      soundBtn.volume(0.5)
      soundBtn.play()
    }
    setSelectedCategory(category.id)
  }

  return(
    <>
      <div onClick={handleClick} className={`category ${selectedCategory === category.id ? 'selected' : ''}`}>
        <div className="content-inside">
          <img src={`assets/img/donat/skins.category/${category.id}.png`} />
          <div className="text-block">
            <span className="name">{category.name}</span>
            <span className="descr">{category.description}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkinsCategory