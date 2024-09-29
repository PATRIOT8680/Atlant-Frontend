import { useState } from 'react'
import './assets/styles/compiled-css/Index.css'

import Login from './components/Login'
import Register from './components/Register'
import Recovery from './components/Recovery'

const Auth = () => {
  const [currentForm, setCurrentForm] = useState<'login' | 'register' | 'recovery'>('login')

  return(
    <>
      <div className="auth">
        <div className="effect"></div>
        { currentForm === 'login' && <Login setCurrentForm={setCurrentForm} /> }
        { currentForm === 'register' && <Register setCurrentForm={setCurrentForm} /> }
        { currentForm === 'recovery' && <Recovery setCurrentForm={setCurrentForm} /> }
      </div>
    </>
  )
}

export default Auth