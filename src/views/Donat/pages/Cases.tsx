import { useState, FC } from 'react'
import './assets/styles/compiled-css/Cases.css'
import { ICasesData } from '../../../store/Donat/cases.data'

import CasesList from './pages/CasesList'
import CaseContent from './pages/CaseContent'

interface ICases {
  onNavigationVisible: (isVisible: boolean) => void
}

const Cases: FC<ICases> = ({ onNavigationVisible }) => {
  const [selectedCase, setSelectedCase] = useState<ICasesData | null>(null)

  const handleCaseSelect = (cas: ICasesData) => {
    setSelectedCase(cas)
    onNavigationVisible(false)
  }

  return(
    <>
      <div className="cases">
        { selectedCase ? (
          <CaseContent cases={selectedCase} />
        ) : (
          <CasesList onCaseSelect={handleCaseSelect} />
        ) }
      </div>
    </>
  )
}

export default Cases