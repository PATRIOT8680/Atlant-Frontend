import { FC, useState, useEffect, Dispatch, SetStateAction } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../reducer/rootReducer"

import './assets/styles/spawnPlayer.css'
import leftArrow from './assets/img/arrowleft.svg'
import rightArrow from './assets/img/arrowright.svg'

interface IPersonData {
  personData: any,
  name: string,
  setSelectSpawnPlayer: Dispatch<SetStateAction<boolean>>
}

const SpawnPlayerTab = ({ personData, name, setSelectSpawnPlayer }: IPersonData) => {

  const [currentPersonSpawn, setCurrentPersonSpawn] = useState<number>(0)
  const leftHandle = () => {
    setCurrentPersonSpawn(prevCount => (prevCount - 1 + 4) % 4)
  }

  const rightHandle = () => {
    setCurrentPersonSpawn(prevCount => (prevCount + 1) % 4)
  }

  const selectChar = (name: string, spawnName: string) => {
    mp.trigger('client:events:selectPlayer', // eslint-disable-line
        name, spawnName);
        setSelectSpawnPlayer(false)
}

  return(
    <>
      <div className="spwanPlayerWrapper">
        <div className="spwanPlayerContainer">
          <span className="accinfo__nickname">{name}</span>
          <span className="title-info-text">{`Наиграно часов: ${personData.old} ч.`}</span>
          <span className="title-info-text">{`Общий баланс: ${personData.cash + personData.bank}$`}</span>
          <div className="text-box">
              <span className="chevron-left" onClick={leftHandle}>
              <img className="arrow" src = {leftArrow} />
              </span>
              <span>{`Спавн: ${personData.spawn[currentPersonSpawn]}`}</span>
              <span className="chevron-right" onClick={rightHandle}>
                <img className="arrow" src = {rightArrow} />
              </span>
          </div>
        </div>
        <button className='btn-create-char' onClick={() => selectChar(name, personData.spawn[currentPersonSpawn])}>Войти</button>
      </div>
    </>
  )
}

export default SpawnPlayerTab