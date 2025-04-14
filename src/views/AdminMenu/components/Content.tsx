import { FC } from "react";

import Reports from '../pages/Reports'
import Player from '../pages/Player'
import Fraction from '../pages/Fraction'
import Homes from '../pages/Homes'
import Families from '../pages/Families'
import Crime from '../pages/Crime'
import Vehicle from '../pages/Vehicles'
import Teleport from '../pages/Teleport'
import Issue from '../pages/Issue'
import Developer from '../pages/Developer'

interface IContent {
  selectedTab: string,
  onTabChange: (tab: string) => void
}

const Content: FC<IContent> = ({ selectedTab, onTabChange }) => {
  switch (selectedTab) {
    case 'reports':
      return <Reports />
    case 'player':
      return <Player />
    case 'fraction':
      return <Fraction />
    case 'homes':
      return <Homes />
    case 'families':
      return <Families />
    case 'crime':
      return <Crime />
    case 'vehicle':
      return <Vehicle />
    case 'teleport':
      return <Teleport />
    case 'issue':
      return <Issue />
    case 'developer':
      return <Developer />
  }
}

export default Content