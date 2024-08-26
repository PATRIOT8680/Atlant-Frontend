import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'
import './assets/fonts/MBF/stylesheet.css'

import Petrol from './views/Petrol/Index'
import DonatMenu from './views/Donat/Index'
import HUD from './views/HUD/Index'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/petrol' element={<Petrol />} />
          <Route path='/donat' element={<DonatMenu />} />
          <Route path='/hud' element={<HUD />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App