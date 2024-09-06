import { useState } from 'react'
import './assets/styles/compiled-css/Index.css'

import SVG_trade from './assets/img/trade-items.svg'
import SVG_documents from './assets/img/documents.svg'
import SVG_social from './assets/img/social.svg'
import SVG_cash from './assets/img/cash.svg'
import SVG_acquaint from './assets/img/acquaint.svg'
import SVG_home from './assets/img/home.svg'
import SVG_fraction from './assets/img/fraction.svg'

const InteractionPlayer = () => {
  const [hoverSection, setHoverSection] = useState<string | null>('Закрыть')
  const [selectInteraction, setSelectInteraction] = useState<string | null>()

  const handleSelectInteraction = () => {
    mp.trigger('client.select.interaction', selectInteraction)
  }

  return(
    <>
      <div className="interaction-player">
        <span className={`hover-section ${hoverSection !== 'Закрыть' ? 'act' : ''}`}>{hoverSection}</span>
        <div className={`selections-interaction ${hoverSection !== 'Закрыть' ? 'act' : ''}`} onMouseLeave={() => setHoverSection('Закрыть')}>
          <svg width="666" height="666" viewBox="0 0 666 666" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className={`center-circle ${hoverSection !== 'Закрыть' ? 'hover-sec' : ''}`} onMouseEnter={() => setHoverSection('Закрыть')}>
              <circle cx="332.5" cy="332.5" r="165.5" fill="#131C33" fill-opacity="0.93"/>
            </g>
            <g className='trade-items' id='interaction' onMouseEnter={() => setHoverSection('Обмен')}>
              <path d="M0 333C4.2853e-06 283.982 10.8217 235.568 31.6926 191.215C52.5635 146.863 82.9688 107.664 120.738 76.419L221.67 198.424C201.86 214.812 185.912 235.372 174.966 258.635C164.019 281.898 158.343 307.29 158.343 333H0Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_trade} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Обмен</text>
              </g>
            </g>
            <g className='documents' id='interaction' onMouseEnter={() => setHoverSection('Документы')}>
              <path d="M125.18 72.8079C163.481 42.2165 208.063 20.458 255.744 9.08575C303.424 -2.28651 353.028 -2.99207 401.012 7.01944L368.672 162.025C343.504 156.774 317.488 157.144 292.479 163.108C267.471 169.073 244.088 180.485 224 196.53L125.18 72.8079Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_documents} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Документы</text>
              </g>
            </g>
            <g className='social' id='interaction' onMouseEnter={() => setHoverSection('Социальное')}>
              <path d="M405.22 7.92564C453.071 18.5565 497.985 39.6203 536.756 69.6135C575.527 99.6067 607.198 137.789 629.509 181.436L488.517 253.505C476.816 230.613 460.204 210.586 439.869 194.855C419.534 179.124 395.977 168.076 370.879 162.5L405.22 7.92564Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_social} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Социальное</text>
              </g>
            </g>
            <g className='cash' id='interaction' onMouseEnter={() => setHoverSection('Наличные')}>
              <path d="M631.319 185.03C653.1 228.943 664.918 277.123 665.929 326.131C666.94 375.138 657.12 423.765 637.168 468.539L492.535 404.089C502.999 380.606 508.15 355.101 507.62 329.397C507.089 303.693 500.891 278.423 489.467 255.391L631.319 185.03Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_cash} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Наличные</text>
              </g>
            </g>
            <g className='acquaint' id='interaction' onMouseEnter={() => setHoverSection('Познакомиться')}>
              <path d="M635.703 471.779C615.275 516.338 585.261 555.837 547.805 587.456C510.349 619.076 466.373 642.036 419.019 654.698L378.117 501.729C402.954 495.088 426.018 483.045 445.664 466.461C465.31 449.877 481.052 429.16 491.766 405.789L635.703 471.779Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_acquaint} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Познакомиться</text>
              </g>
            </g>
            <g className='home' id='interaction' onMouseEnter={() => setHoverSection('Жильё')}>
              <path d="M413.524 656.118C365.96 667.971 316.367 669.177 268.283 659.651C220.2 650.124 174.812 630.1 135.361 601.007L229.339 473.569C250.031 488.828 273.837 499.33 299.056 504.327C324.276 509.323 350.287 508.691 375.234 502.474L413.524 656.118Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_home} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Жильё</text>
              </g>
            </g>
            <g className='fraction' id='interaction' onMouseEnter={() => setHoverSection('Фракция')}>
              <path d="M128.314 595.665C89.0889 565.097 57.2076 526.133 35.0112 481.632C12.8151 437.131 0.86748 388.224 0.0458984 338.502L158.367 335.886C158.798 361.965 165.064 387.616 176.706 410.957C188.348 434.297 205.07 454.734 225.643 470.766L128.314 595.665Z" fill="#131C33" fill-opacity="0.93"/>
              <g className="text-icon">
                <image className="icon-interaction" xlinkHref={SVG_fraction} />
                <text className='title-interaction' fill="#FFFFFF" text-anchor="middle">Фракция</text>
              </g>
            </g>
          </svg>
          { hoverSection === 'Документы' ? (

            <div className="group-selection" id='docs'>
              <span className="passport" onClick={() => { setSelectInteraction('passport'); handleSelectInteraction}}>Паспорт</span>
              <span className="licenses" onClick={() => {setSelectInteraction('licenses'); handleSelectInteraction}}>Лицензии</span>
              <span className="military-ticket" onClick={() => {setSelectInteraction('military-ticket'); handleSelectInteraction}}>Военный билет</span>
            </div>

          ) : null }

          { hoverSection === 'Социальное' ? (

            <div className="group-selection" id='socials'>
              <span className="kiss" onClick={() => {setSelectInteraction('kiss'); handleSelectInteraction}}>Поцеловать</span>
              <span className="cary-arms" onClick={() => {setSelectInteraction('carry-arms'); handleSelectInteraction}}>Нести на руках</span>
              <span className="pair-anim" onClick={() => {setSelectInteraction('pair-anim'); handleSelectInteraction}}>Парная анимация</span>
            </div>

          ) : null }

          { hoverSection === 'Наличные' ? (

            <div className="group-selection" id='cash'>
              <span className="money-one" onClick={() => {setSelectInteraction('10000$'); handleSelectInteraction}}>10.000$</span>
              <span className="money-two" onClick={() => {setSelectInteraction('5000$'); handleSelectInteraction}}>5.000$</span>
              <span className="money-three" onClick={() => {setSelectInteraction('1000$'); handleSelectInteraction}}>1.000$</span>
              <span className="money-four" onClick={() => {setSelectInteraction('500$'); handleSelectInteraction}}>500$</span>
              <span className="money-five" onClick={() => {setSelectInteraction('100$'); handleSelectInteraction}}>
                100$</span>
            </div>

          ) : null }

          { hoverSection === 'Жильё' ? (

            <div className="group-selection" id='home'>
              <span className="sell-home" onClick={() => {setSelectInteraction('sell-home'); handleSelectInteraction}}>Продать жильё</span>
              <span className="invite-home" onClick={() => {setSelectInteraction('invite-home'); handleSelectInteraction}}>Подселить</span>
            </div>

          ) : null }

          { hoverSection === 'Фракция' ? (

            <div className="group-selection" id='fraction'>
              <span className="invite-fraction" onClick={() => {setSelectInteraction('invite-fraction'); handleSelectInteraction}}>Пригласить</span>
            </div>

          ) : null }
        </div>
        
      </div>
    </>
  )
}

export default InteractionPlayer