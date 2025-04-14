import { useEffect, useState } from 'react'
import './assets/styles/compiled-css/Index.css'

import Header from './components/Header'
import Content from './components/Content'
import Navigation from "./components/Navigation"

import Blob from './assets/img/blob.svg'

const DonatMenu = () => {
  const [selectedTab, setSelectedTab] = useState('main')
  const [isNavigationVisible, setIsNavigationVisible] = useState<boolean>(true)

  const handleChangeTab = (tab: string) => {
    setSelectedTab(tab)
  }

  const handleNavigationVisible = (isVisible: boolean) => {
    setIsNavigationVisible(isVisible)
  }

  useEffect(() => {
    const handleCloseMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        
      }
    }

    window.addEventListener('keydown', handleCloseMenu)
    return () => window.removeEventListener('keydown', handleCloseMenu)
  }, [])

  return(
    <>
      <div className="donat-menu">
        <div className="bg"></div>
        <div className="effects">
          <img id='one' src={Blob} />
          <img id='two' src={Blob} />
        </div>

        <div className="header">
          <Header />
        </div>

        <div className="content">
          <Content 
            selectedTab={selectedTab}
            onTabChange={handleChangeTab}
            onNavigationVisible={handleNavigationVisible}
          />
        </div>

        { isNavigationVisible && (
          <div className="navigation-menu">
            <Navigation onTabChange={handleChangeTab} selectedTab={selectedTab} />
          </div>
        ) }

      </div>
    </>
  )
}

export default DonatMenu