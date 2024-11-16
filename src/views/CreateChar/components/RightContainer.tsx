import { FC } from 'react'
import './styles/compiled-css/RightContainer.css'

import Gen from "./elements/Gen.tsx";
import Main from "./elements/Main.tsx";
import Hair from "./elements/Hair.tsx";
import Clothes from "./elements/Clothes.tsx";

interface IRightContainer {
  selectedTab: string,
}

const RightContainer: FC<IRightContainer> = ({ selectedTab }) => {
  let content

  switch (selectedTab) {
    case 'gen':
      content = <Gen />
      break
    case 'face':
      content = <Main />
      break
    case 'hair':
      content = <Hair />
      break
    case 'clothes':
      content = <Clothes />
      break
    default:
      content = null
  }

		return <div className='right-container'>{content}</div>
}

export default RightContainer