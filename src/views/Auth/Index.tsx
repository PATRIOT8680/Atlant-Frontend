import { useState, useEffect } from 'react'
import { EventManager } from '../../util/eventmanager.ts'
import './assets/styles/compiled-css/Index.css'

import Login from './components/Login'
import Register from './components/Register'
import Recovery from './components/Recovery'

const Auth = () => {
  const [currentForm, setCurrentForm] = useState<'login' | 'register' | 'recovery'>('login')

useEffect(() => {
  const showForm = (value: {type: string} ) => {
        console.log(`${value.type}`)
          switch(value.type) {
            case 'login': 
              setCurrentForm('login')
                return currentForm;

            case 'register': 
                setCurrentForm('register')
                  return currentForm;
  
            default: return;
          }
      };
      EventManager.addHandler('showForm', showForm);;
      return () => EventManager.removeHandler( 'showForm', showForm );
}, [currentForm, setCurrentForm])

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