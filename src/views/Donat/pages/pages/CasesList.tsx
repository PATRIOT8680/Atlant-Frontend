import { FC } from "react"
import CaseBlock from "../components/CaseBlock"
import { casesData, ICasesData } from "../../../../store/Donat/cases.data"
import './assets/styles/compiled-css/CasesList.css'

interface ICasesList {
  onCaseSelect: (caseItem: ICasesData) => void
}

const CasesList: FC<ICasesList> = ({ onCaseSelect }) => {
  return(
    <>
      <ul className="case-list">
        { casesData.map((caseItem, index) => (
          <CaseBlock 
            key={index}
            caseItem={caseItem}
            onCaseSelect={onCaseSelect}
          />
        )) }
      </ul>
    </>
  )
}

export default CasesList