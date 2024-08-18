//import { useNavigate } from 'react-router-dom'
import { useState, ChangeEvent, useRef, useEffect, FC } from 'react'
import { useNotify } from '../../../components/Notify/NotificationProvider'
import { Howl } from 'howler'
import './assets/styles/compiled-css/Main.css'

import Next_svg from './assets/img/Main/next.svg'
import Acoins_trade from './assets/img/Main/acoins-trade.svg'
import Dollar_svg from './assets/img/Main/dollar.svg'
import Woman_bg from './assets/img/Main/person-1.png'
import Next_vip from './assets/img/Main/next-vip.svg'
import Next_uniq from './assets/img/Main/next-uniq.svg'
import Next_services from './assets/img/Main/next-services.svg'
import Car_uniq from './assets/img/Main/car.png'
import Services_img from './assets/img/Main/person-2.png'

interface ITabChange {
  onTabChange: (tab: string) => void
}

const Main: FC<ITabChange> = ({ onTabChange }) => {
  const sendNotify = useNotify()
  const [enteredAcoins, setEnteredAcoins] = useState<number | null>(null)
  const [resultDollars, setResultDollars] = useState(0)
  const [soundHover, setSoundHover] = useState<Howl | null>(null)
  const [soundBtn, setSoundBtn] = useState<Howl | null>(null)
  const maxOffset = 7;
  let animationId: number | null = null;

  const womanBgRef = useRef<HTMLImageElement>(null)
  const soundRefHover = useRef<Howl | null>(null)
  const soundRefClick = useRef<Howl | null>(null)

  const [womanBgPosition, setWomanBgPosition] = useState({ x: 0, y: 0 });
  const [womanBgTargetPosition, setWomanBgTargetPosition] = useState({ x: 0, y: 0 });

  const handleEnteredAcoins = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0

    if (value < 0 || value > 1000000) return

    setEnteredAcoins(value)
    setResultDollars(value ? value * 50 : 0)
  }

  const handleClickTrade = async () => {
    try {
      handleMouseClick()

      if (enteredAcoins === null || enteredAcoins < 1 || enteredAcoins > 1000000) {
        return sendNotify({type: 'ERROR', message: 'Допустимый обмен: от 1 AC до 1.000.000 ACoins!', timer: 5000})
      }

      const response = await fetch('api/donat/main', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enteredAcoins,
          resultDollars
        })
      })

      if (response.ok) {
        sendNotify({type: 'SUCCESS', message: `Успешный обмен. Получено ${resultDollars} $`, timer: 5000})
      } else {
        const errorData = await response.json()
        sendNotify({type: 'ERROR', message: `Ошибка обмена: ${errorData}`, timer: 5000})
      }

    } catch (e) {
      console.error(`Ошибка обмена: ${e}`)
    }
  }

  const createMouseMoveHandler = (ref: React.RefObject<HTMLImageElement>, setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>, setTargetPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    return (e: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setTargetPosition({
        x: -Math.max(-maxOffset, Math.min(maxOffset, x)),
        y: -Math.max(-maxOffset, Math.min(maxOffset, y)),
      });
    };
  };

  const createAnimationEffect = (position: { x: number; y: number }, targetPosition: { x: number; y: number }, setPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    return () => {
      const animate = () => {
        const xDiff = targetPosition.x - position.x;
        const yDiff = targetPosition.y - position.y;

        setPosition({
          x: position.x + xDiff * 0.1,
          y: position.y + yDiff * 0.1,
        });

        animationId = requestAnimationFrame(animate)
      };

      requestAnimationFrame(animate)
      return () => {
        if (animationId !== null) {
          cancelAnimationFrame(animationId)
        }
      }
    }
  }

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

  useEffect(() => {
    const handleMouseMove = createMouseMoveHandler(womanBgRef, setWomanBgPosition, setWomanBgTargetPosition);
    const womanBgContainer = womanBgRef.current?.parentElement;
    if (womanBgContainer) {
      womanBgContainer.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (womanBgContainer) {
        womanBgContainer.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }, [])

  useEffect(createAnimationEffect(womanBgPosition, womanBgTargetPosition, setWomanBgPosition), [womanBgPosition, womanBgTargetPosition]);

  return(
    <>
      <div className="block-column-one">
        <div className="top-balance" onClick={() => sendNotify({type: 'INFO', message: 'Перейдите в браузер, свернув игру на ALT + TAB', timer: 4000})} onMouseEnter={handleMouseHover}>
          <div className="title">
            <span className="top">Пополнить</span>
            <span className="bottom">баланс</span>
          </div>
          <img src={Next_svg} className='next' />
        </div>
        <div className="trade-money">
          <div className="content-inside">
            <div className="header-trade">
              <span className="title">Обмен валюты</span>
              <span className="description">Обмен происходит по курсу 1 <img src={Acoins_trade} /> = 50 $</span>
            </div>
            <div className="inputs">
              <div className="inp-1">
                <img src={Acoins_trade} />
                <input
                  type='number' className="acoins"
                  value={enteredAcoins || ''} onChange={handleEnteredAcoins}
                  placeholder='Введите количество ACoins...'
                />
              </div>
              <div className="info-2">
                <img src={Dollar_svg} />
                <span className="dollar-text">{resultDollars} $</span> 
              </div>
            </div>
            <button className='trade-btn' onClick={handleClickTrade}>Обменять {enteredAcoins} AC</button>
          </div>
        </div>
      </div>

      <div className="vip-block" onMouseEnter={handleMouseHover}>
        <img
          ref={womanBgRef}
          style={{
            right: `calc(-6vw - ${womanBgPosition.x}px)`,
            bottom: `calc(-0.5vw - ${womanBgPosition.y}px)`,
          }}
          src={Woman_bg} className="woman-bg"
        />
        <div className="content-inside">
          <div className="header-title">
            <span className="sale-title">Приобретите</span>
            <span className="name-vip">Sapfire VIP</span>
          </div>
          <div className="privileges">
            <span className="title">Привилегии</span>
            <ul className="list-privileges">
              <li>
                <span className="pr-name">Заработанная плата</span>
                <span className="meaning">X2</span>
              </li>
              <li>
                <span className="pr-name">Пособие каждый час</span>
                <span className="meaning">$3.000</span>
              </li>
              <li>
                <span className="pr-name">Увольнение с фракции</span>
                <span className="meaning">✓</span>
              </li>
              <li>
                <span className="pr-name">Донат</span>
                <span className="meaning">X1.5</span>
              </li>
              <li>
                <span className="pr-name">Налогооблажение</span>
                <span className="meaning">✘</span>
              </li>
            </ul>
          </div>
          <div className="more-detail" onClick={() => {onTabChange('vip'); handleMouseClick()}}>
            <button className="title-btn">Подробнее</button>
            <img className='next-vip' src={Next_vip} />
          </div>
        </div>
      </div>

      <div className="block-three">
        <div className="block" id='one' onClick={() => {onTabChange('vehicles'); handleMouseClick()}} onMouseEnter={handleMouseHover}>
          <img src={Car_uniq} id='uniq-img' />
          <div className="header-title">
            <span id="one-title">Уникальный</span>
            <span id="two-title">транспорт</span>
          </div>
          <button className="next-btn">
            <img src={Next_uniq} />
          </button>
        </div>
        <div className="block" id='two' onClick={() => {onTabChange('services'); handleMouseClick()}} onMouseEnter={handleMouseHover}>
          <img src={Services_img} id='services-img' />
          <div className="header-title">
            <span id="one-title">Полезные</span>
            <span id="two-title">услуги</span>
          </div>
          <button className="next-btn">
            <img src={Next_services} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Main