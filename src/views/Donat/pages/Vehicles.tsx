import { useEffect, useRef, useState } from 'react'
import './assets/styles/compiled-css/Vehicles.css'
import { vehiclesData } from "../../../store/Donat/vehicles.data"

const Vehicles = () => {
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
      <ul className="vehicles">
        { vehiclesData.map((vehicle, index) => (
          
          <li className="vehicle" id={vehicle.shortName} key={index} onMouseEnter={handleMouseHover}>
            <div className="left-block">
              <div className="header-title">
                <span className="veh-name">{vehicle.fullName}</span>
                <span className="type-veh">{vehicle.typeVeh}</span>
              </div>
              <ul className="characteristics">
                { vehicle.characteristics.map((characteristic, index) => (
                  <li key={index}>{characteristic.name} • {characteristic.value}</li>
                )) }
              </ul>
              <button className="price" onClick={handleBuy}>Купить • {vehicle.price} AC</button>
            </div>
            <img src={`src/assets/img/donat/vehicles.image/${vehicle.shortName}.png`} className="img-block" />
          </li>

        )) }
      </ul>
    </>
  )
}

export default Vehicles