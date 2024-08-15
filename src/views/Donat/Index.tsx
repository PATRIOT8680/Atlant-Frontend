import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './assets/styles/compiled-css/Index.css'

import Header from './components/Header'
import Content from './components/Content'
import Navigation from "./components/Navigation"

import Blob from './assets/img/blob.svg'

const DonatMenu = () => {
  const [selectedTab, setSelectedTab] = useState('main')
  const navigate = useNavigate()

  const handleChangeTab = (tab: string) => {
    setSelectedTab(tab)
  }

  useEffect(() => {
    const handleCloseMenu = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/hud')
      }
    }

    window.addEventListener('keydown', handleCloseMenu)
    return () => window.removeEventListener('keydown', handleCloseMenu)
  }, [navigate])

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
          <Content selectedTab={selectedTab} onTabChange={handleChangeTab} />
        </div>

        <div className="navigation-menu">
          <Navigation onTabChange={handleChangeTab} selectedTab={selectedTab} />
        </div>

      </div>
    </>
  )
}

export default DonatMenu