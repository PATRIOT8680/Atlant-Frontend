import { useState } from 'react'
import './assets/styles/compiled-css/Index.css'

import Help from './components/Help'
import MinimapSection from './components/MinimapSection'
import ServerSection from './components/ServerSection'
import Speedometer from './components/Speedometer'
import TopSection from './components/TopSection'
import Interaction from './components/Interaction'

import Effect_right from './assets/img/Index/blur-server-section.svg'

const HUD = () => {

  return(
    <>
      <div className="hud">
        <div className="effects">
        </div>
        <div className="content-inside">
          <div className="right-content">
            <ServerSection />
            <Help />
            <Speedometer />
          </div>
          <MinimapSection />
          <TopSection />
          <Interaction />
        </div>
      </div>
    </>
  )
}

export default HUD