import { FC } from "react"

import Main from '../pages/Main'
import Sets from '../pages/Sets'
import Services from '../pages/Services'
import VIP from '../pages/VIP'
import Vehicles from '../pages/Vehicles'
import Clothes from '../pages/Clothes'
import Games from '../pages/Games'
import Cases from '../pages/Cases'
import Skins from '../pages/Skins'

interface IContent {
  selectedTab: string,
  onTabChange: (tab: string) => void,
  onNavigationVisible: (isVisible: boolean) => void
}

const Content: FC<IContent> = ({ selectedTab, onTabChange, onNavigationVisible }) => {
  switch (selectedTab) {
    case 'main':
      return <Main onTabChange={onTabChange} />
    case 'sets':
      return <Sets />
    case 'services':
      return <Services />
    case 'vip':
      return <VIP />
    case 'vehicles':
      return <Vehicles />
    case 'clothes':
      return <Clothes />
    case 'games':
      return <Main onTabChange={onTabChange} />
    case 'cases':
      return <Cases onNavigationVisible={onNavigationVisible} />
    case 'skins':
      return <Skins />
    default:
      return null
  }
}

export default Content