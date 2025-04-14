import { useState } from "react"
import './assets/styles/compiled-css/Index.css'
import './assets/styles/compiled-css/adaptive.css'

import Navigation from "./components/Navigation"
import Content from "./components/Content"

export const handleCloseModal = () => {
  
}

const AdminMenu = () => {
  const [selectedTab, setSelectedTab] = useState('reports')

  return(
    <>
      <div className="admin-menu">
        <Navigation onTabChange={(tab: string) => setSelectedTab(tab)} selectedTab={selectedTab} />
        <div className="content">
          <Content onTabChange={(tab: string) => setSelectedTab(tab)} selectedTab={selectedTab} />
        </div>
      </div>
    </>
  )
}

export default AdminMenu