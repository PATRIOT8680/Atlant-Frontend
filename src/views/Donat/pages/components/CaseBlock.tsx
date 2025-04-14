import { FC } from "react"
import './assets/styles/compiled-css/CaseBlock.css'
import { ICasesData } from "../../../../configs/Donat/cases.data"

import Acoins_green from './assets/img/SkinContent/acoins.svg'

interface ICaseBlock {
  caseItem: ICasesData,
  onCaseSelect: (caseItem: ICasesData) => void
}

const CaseBlock: FC<ICaseBlock> = ({ caseItem, onCaseSelect }) => {
  return(
    <>
      <div className='case-block' id={caseItem.id}>
        <div className="content-inside">
          <img className="case-img" src={`assets/img/donat/case.image/${caseItem.id}.png`} />
          <div className="header-title">
            <div className="name-block">
              <span className="top-title">{caseItem.name}</span>
              <span className="bottom-title">{caseItem.bottomName}</span>
            </div>
            <span className="price">
              {caseItem.price}
              <img src={Acoins_green} />
            </span>
          </div>
          <button className="open-case" onClick={() => onCaseSelect(caseItem)}>Открыть</button>
        </div>
      </div>
    </>
  )
}

export default CaseBlock