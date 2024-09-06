import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './reducer/rootReducer'
import { useNotify } from './components/Notify/NotificationProvider'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'
import './assets/fonts/MBF/stylesheet.css'

import Petrol from './views/Petrol/Index'
import DonatMenu from './views/Donat/Index'
import HUD from './views/HUD/Index'
import DialogMenu from './views/Dialog/Index'
import InteractionPlayer from './views/InteractionPlayer/Index'

const App = () => {
  const hudVisible = useSelector((state: RootState) => state.hudReducer.isVisible)
  const petrolVisible = useSelector((state: RootState) => state.petrolReducer.isVisible)
  const dialogVisible = useSelector((state: RootState) => state.dialogReducer.isVisible)
  const interactionPlayerVisible = useSelector((state: RootState) => state.interactionPlayerReducer.isVisible)
  const sendNotifyReducer = useSelector((state: RootState) => state.sendNotifyReducer)

  const sendNotify = useNotify()

  if (sendNotifyReducer.message) {
    sendNotify({ type: sendNotifyReducer.typeNotify, message: sendNotifyReducer.message, timer: sendNotifyReducer.timer })
  }

  return(
    <>
        {/*<DonatMenu />*/}
        
        { petrolVisible && (<Petrol />) }
        { hudVisible && (<HUD />) }
        { dialogVisible && (<DialogMenu />) }
        { interactionPlayerVisible && (<InteractionPlayer />) }
    </>
  )
}

export default App