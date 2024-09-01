import { useSelector } from 'react-redux'
import { RootState } from './reducer/rootReducer'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'
import './assets/fonts/MBF/stylesheet.css'

import Petrol from './views/Petrol/Index'
import DonatMenu from './views/Donat/Index'
import HUD from './views/HUD/Index'

const App = () => {
  const hudVisible = useSelector((state: RootState) => state.hudReducer.isVisible)
  const petrolVisible = useSelector((state: RootState) => state.petrolReducer.isVisible)

  return(
    <>
        {/*<DonatMenu />*/}
        
        { petrolVisible && (<Petrol />) }
        { hudVisible && (<HUD />) }
      
    </>
  )
}

export default App