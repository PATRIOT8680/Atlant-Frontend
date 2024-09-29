import { FC, useState } from 'react'
import { IPropsAuth } from './Login'
import { useNotify } from '../../../components/Notify/NotificationProvider'
import '../assets/styles/compiled-css/Register.css'

import SVG_register from '../assets/img/register.svg'
import SVG_login_inp from '../assets/img/login-inp.svg'
import SVG_email_inp from '../assets/img/email-inp.svg'
import SVG_password_inp from '../assets/img/password-inp.svg'

const Register: FC<IPropsAuth> = ({ setCurrentForm }) => {
  const [login, setLogin] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repPassword, setRepPassword] = useState<string>('')

  const sendNotify = useNotify()

  const handleRegister = () => {
    if (login === '' || email === '' || password === '' || repPassword === '') {
      return sendNotify({type: 'ERROR', message: 'Поле(я) ввода не могут быть пустыми!', timer: 4000})
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)) {
      return sendNotify({type: 'ERROR', message: 'Электронная почта не валидна!', timer: 4000})
    }

    if (password.length < 4 || password.length > 16) {
      return sendNotify({type: 'ERROR', message: 'Пароль должен состоять от 4 до 16 символов!', timer: 6000})
    }

    if (password !== repPassword) {
      return sendNotify({type: 'ERROR', message: 'Пароли не совпадают!', timer: 4000})
    }

    setLogin(''), setEmail(''), setPassword(''), setRepPassword('')
    mp.trigger('client.register', login, email, password)
  }

  return(
    <>
      <div className="register">
        <div className="header-section">
          <img src={SVG_register} className='title-svg' />
          <span className="description">Нет аккаунта на сервере? <br/>Создайте аккаунт, чтобы начать играть</span>
        </div>
        <div className="inputs-btn">
          <div className="block-inputs">
            <div className="input-block">
              <div className="icon-block"><img src={SVG_login_inp} className='icon' /></div>
              <input
                type='text'
                placeholder='Введите логин...'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="input-block">
              <div className="icon-block"><img src={SVG_email_inp} className='icon' /></div>
              <input
                type='text'
                placeholder='Введите email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-block">
              <div className="icon-block"><img src={SVG_password_inp} className='icon' /></div>
              <input
                type='password'
                placeholder='Введите пароль...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-block">
              <div className="icon-block"><img src={SVG_password_inp} className='icon' /></div>
              <input
                type='password'
                placeholder='Повторите пароль...'
                value={repPassword}
                onChange={(e) => setRepPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="main-btn" onClick={handleRegister}>Зарегистрироваться</button>
        </div>
        <div className="redirection-block">
          <span className="main-redirection">
            <span className="second-text">Уже есть? </span>
            <span className="link-text" onClick={() => setCurrentForm('login')}>Авторизуйтесь!</span>
          </span>
          <span className="bottom-redir" onClick={() => setCurrentForm('recovery')}>Восстановить доступ</span>
        </div>
      </div>
    </>
  )
}

export default Register