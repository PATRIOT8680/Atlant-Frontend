import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles/compiled-css/App.css'
import './assets/fonts/Montserrat/stylesheet.css'

import Petrol from './views/Petrol/Index'

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/petrol' element={<Petrol />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App