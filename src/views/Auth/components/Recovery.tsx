import { FC, useState } from 'react'
import { IPropsAuth } from './Login'
import { useNotify } from '../../../components/Notify/NotificationProvider'
import '../assets/styles/compiled-css/Recovery.css'

import SVG_recovery from '../assets/img/recovery.svg'
import SVG_email_inp from '../assets/img/email-inp.svg'
import SVG_password_inp from '../assets/img/password-inp.svg'

const Recovery: FC<IPropsAuth> = ({ setCurrentForm }) => {
  const [verifyEmail, setVerifyEmail] = useState<string>('')
  const [code, setCode] = useState<string>('')

  const sendNotify = useNotify()

  const handleRecover = () => {
    if (verifyEmail === '' || code === '') {
      return sendNotify({type: 'ERROR', message: 'Поле(я) ввода не могут быть пустыми!', timer: 4000})
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(verifyEmail)) {
      return sendNotify({type: 'ERROR', message: 'Электронная почта не валидна!', timer: 4000})
    }
  }

  return(
    <>
      <div className="recovery">
        <div className="header-section">
          <img src={SVG_recovery} className='title-svg' />
          <span className="description">Забыли пароль? <br/>Тогда восстановите свой аккаунт!</span>
        </div>
        <div className="inputs-btn">
          <div className="block-inputs">
            <div className="input-block">
              <div className="icon-block"><img src={SVG_email_inp} className='icon' /></div>
              <input 
                type='text'
                placeholder='Введите привязанный email...'
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
              />
            </div>
            <div className="input-block">
              <div className="icon-block"><img src={SVG_password_inp} className='icon' /></div>
              <input
                type='password'
                placeholder='Введите код с письма...'
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </div>
          <button className="main-btn" onClick={handleRecover}>Восстановить</button>
        </div>
        <div className="redirection-block">
          <span className="main-redirection">
            <span className="link-text">Отправить код с письмом</span>
          </span>
          <span className="bottom-redir" onClick={() => setCurrentForm('login')}>Вернуться назад</span>
        </div>
      </div>
    </>
  )
}

export default Recovery