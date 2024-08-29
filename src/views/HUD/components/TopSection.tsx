import { useState } from 'react'
import '../assets/styles/compiled-css/TopSection.css'

import SVG_effect from '../assets/img/TopSection/effect.svg'

const TopSection = () => {
  const getAllExp = (level: number) => {
    return Math.pow(2, level) * 4
  }

  const [activeLevel, setActiveLevel] = useState<number>(10)
  const [activeExp, setActiveExp] = useState<number>(4096)
  const [allExp, setAllExp] = useState(getAllExp(activeLevel))

  const nextLevel = activeLevel + 1

  if (activeExp === allExp) {

  }

  const handleExpChange = (newExp: number) => {
    setActiveExp(newExp)
    if (newExp >= allExp) {
      setActiveLevel(activeLevel + 1)
      setAllExp(getAllExp(activeLevel + 1))
    }
  }

  const isLevelUp = activeExp >= allExp

  return(
    <>
      <div className="top-section">
        <div className="effect">
          <img src={SVG_effect} />
        </div>
        <div className="level-blocks">
          <span className="active-level">{activeLevel}</span>
          <div className="progress-text">
            <span className="text">{activeExp} EXP / {allExp} EXP</span>
            <div className="progress-bar">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect rx="4" fill="white" fill-opacity="0.27"/>
                <rect
                  rx="4"
                  fill="#1372FF"
                  style={{
                    width: `${(activeExp / allExp) * 100}%`,
                    transition: 'all 1s'
                  }}
                />
              </svg>
            </div>
          </div>
          <span className={`next-level ${isLevelUp ? 'level-up' : ''}`}>{nextLevel}</span>
        </div>
      </div>
    </>
  )
}

export default TopSection