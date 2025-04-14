import { FC, useState, useEffect } from 'react'
import { useNotify } from '../../../components/Notify/NotificationProvider'
import { EventManager } from '../../../util/eventmanager.ts'
import { useSelector, useDispatch } from 'react-redux'
import '../assets/styles/compiled-css/Login.css'

import SVG_login from '../assets/img/login.svg'
import SVG_login_inp from '../assets/img/login-inp.svg'
import SVG_password_inp from '../assets/img/password-inp.svg'
import { hideAuth } from '../../../actions/auth/auth'

export interface IPropsAuth {
  setCurrentForm: (newForm: 'login' | 'register' | 'recovery') => void
}

const Login: FC<IPropsAuth> = ({ setCurrentForm }) => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()

  const sendNotify = useNotify()

  const handleSignIn = () => {
    if (login === '' || password === '') {
      return sendNotify({type: 'ERROR', message: 'Поле(я) ввода не могут быть пустыми!', timer: 4000})
    }
    setLogin(''), setPassword('')
    mp.trigger('client:user:auth:login', login, password)
    /* dispatch(hideAuth()) */
  
  }

  useEffect (() => {
    const authMain = (value: {type: string, login: string} ) => {
      switch(value.type) {
        case 'login': 
            setLogin(value.login)
            return login;

        default: return;
      }
  };
  EventManager.addHandler('authMain:2', authMain);;
  return () => EventManager.removeHandler( 'authMain:2', authMain );
  }, [login, setLogin]);

  return(
    <>
      <div className="login">
        <div className="header-section">
          <img src={SVG_login} className='title-svg' />
          <span className="description">Войдите в существующий игровой аккаунт проекта Atlant Roleplay</span>
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
              <div className="icon-block"><img src={SVG_password_inp} className='icon' /></div>
              <input 
                type='password'
                placeholder='Введите пароль...'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button className="main-btn" onClick={handleSignIn}>Войти</button>
        </div>
        <div className="redirection-block">
          <span className="main-redirection">
            <span className="second-text">Нет аккаунта? </span>
            <span className="link-text" onClick={() => setCurrentForm('register')}>Зарегистрируйтесь!</span>
          </span>
          <span className="bottom-redir" onClick={() => setCurrentForm('recovery')}>Восстановить доступ</span>
        </div>
      </div>
    </>
  )
}

export default Login