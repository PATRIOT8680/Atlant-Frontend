import './assets/styles/compiled-css/Index.css'

import Help from './components/Help'
import MinimapSection from './components/MinimapSection'
import ServerSection from './components/ServerSection'
import Speedometer from './components/Speedometer'
import TopSection from './components/TopSection'

import Effect_right from './assets/img/Index/blur-server-section.svg'

const HUD = () => {
  return(
    <>
      <div className="hud">
        <div className="effects">
          <img src={Effect_right} className="e-right-content" />
        </div>
        <div className="content-inside">
          <div className="right-content">
            <ServerSection />
            <Help />
            <Speedometer />
          </div>
          <MinimapSection />
          <TopSection />
        </div>
      </div>
    </>
  )
}

export default HUD