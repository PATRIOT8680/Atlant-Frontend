import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import '../assets/styles/compiled-css/TopSection.css'

import SVG_effect from '../assets/img/TopSection/effect.svg'

const TopSection = () => {
  const getAllExp = (level: number) => {
    return level * 3 + 3
  }

  const payday = useSelector((state: RootState) => state.paydayReducer)

  const [activeLevel, setActiveLevel] = useState<number>(payday.playerLevel)
  const [activeExp, setActiveExp] = useState<number>(payday.playerExp)
  const [allExp, setAllExp] = useState(getAllExp(activeLevel))

  const nextLevel = activeLevel + 1

  const handleExpChange = (newExp: number) => {
    setActiveExp(newExp)
    if (newExp >= allExp) {
      setActiveLevel(activeLevel + 1)
      setAllExp(getAllExp(activeLevel + 1))
    }
  }

  const isLevelUp = payday.playerExp >= allExp

  return(
    <>
      { payday.active && (

        <div style={{ zoom: '88%' }} className="top-section">
          <div className="effect">
          </div>
          <div className="level-blocks">
            <span className="active-level">{activeLevel}</span>
            <div className="progress-text">
              <span className="text">{activeExp} EXP / {allExp} EXP</span>
              <div className="progress-bar">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect rx="4" fill="white" fillOpacity="0.27"/>
                  <rect
                    rx="4"
                    fill="#1372FF"
                    style={{
                      width: `${(payday.playerExp / allExp) * 100}%`,
                      transition: 'all 1s'
                    }}
                  />
                </svg>
              </div>
            </div>
            <span className={`next-level ${isLevelUp ? 'level-up' : ''}`}>{nextLevel}</span>
          </div>
        </div>

      ) }
    </>
  )
}

export default TopSection