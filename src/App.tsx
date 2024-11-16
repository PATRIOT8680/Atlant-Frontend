import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './reducer/rootReducer'
import { useNotify } from './components/Notify/NotificationProvider'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'
import './assets/fonts/MBF/stylesheet.css'

// import DonatMenu from "./views/Donat/Index";
import Petrol from './views/Petrol/Index'
import HUD from './views/HUD/Index'
import DialogMenu from './views/Dialog/Index'
import InteractionPlayer from './views/InteractionPlayer/Index'
import Auth from './views/Auth/Index'
import SelectPerson from './views/SelectPerson/Index'
import CreateChar from "./views/CreateChar/Index";
import DonatMenu from './views/Donat/Index'

const App = () => {
  const hudVisible = useSelector((state: RootState) => state.hudReducer.isVisible)
  const petrolVisible = useSelector((state: RootState) => state.petrolReducer.isVisible)
  const dialogVisible = useSelector((state: RootState) => state.dialogReducer.isVisible)
  const interactionPlayerVisible = useSelector((state: RootState) => state.interactionPlayerReducer.isVisible)
  const sendNotifyReducer = useSelector((state: RootState) => state.sendNotifyReducer)
  const authVisible = useSelector((state: RootState) => state.authReducer.isVisible)
  const selectPersonVisible = useSelector((state: RootState) => state.selectPersonReducer.isVisible)
  const createCharVisible = useSelector((state: RootState) => state.createCharReducer.isVisible)

  const sendNotify = useNotify()

  useEffect(() => {
    if (sendNotifyReducer.message) {
      sendNotify({ type: sendNotifyReducer.typeNotify, message: sendNotifyReducer.message, timer: sendNotifyReducer.timer })
    }
  }, [sendNotifyReducer, sendNotify])

  return(
    <>
        {/*<DonatMenu />*/}
        { petrolVisible && (<Petrol />) }
        { hudVisible && (<HUD />) }
        { dialogVisible && (<DialogMenu />) }
        { interactionPlayerVisible && (<InteractionPlayer />) }
        { authVisible && (<Auth />) }
        { selectPersonVisible && (<SelectPerson />) }
        { createCharVisible && (<CreateChar />) }
    </>
  )
}

export default App