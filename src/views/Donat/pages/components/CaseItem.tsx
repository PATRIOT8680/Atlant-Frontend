import { FC } from 'react'
import './assets/styles/compiled-css/CaseItem.css'
import { IItem } from '../../../../configs/Donat/cases.data'

import Acoins_green from './assets/img/CaseItem/acoins-green.svg'

interface ICaseItem {
  item: IItem
}

const CaseItem: FC<ICaseItem> = ({ item }) => {
  return(
    <>
      <li className="case-item" id={item.type}>
        <div className="content-inside">
          <div className="img-block">
            <div className="effect"></div>
            <img className='item-img' src={`src/assets/img/donat/case.items/${item.shortName}.png`} />
          </div>
          <div className="header-title">
            <div className="left-title">
              <span className="name-item">{item.fullName}</span>
              <span className="type-item">{item.type}</span>
            </div>
            <span className="price">
              {item.price}
              <img className='acoins-icon' src={Acoins_green} />
            </span>
          </div>
          
          
        </div>
        
      </li>
    </>
  )
}

export default CaseItem