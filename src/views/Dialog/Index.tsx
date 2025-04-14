import { useSelector } from "react-redux"
import { RootState } from "../../reducer/rootReducer"
import './assets/styles/compiled-css/Index.css'

import ButtonDialog from "./components/Button"
import { IButtonDialog } from "./components/Button"
import Rent from "./components/Rent"
import { useState } from "react"

interface IRentData {
  vehRentData: any
  }


const DialogMenu = ({vehRentData} : IRentData) => {
  const rentVisible = useSelector((state: RootState) => state.dialogReducer.isVisibleRent)
  const dialogStates = useSelector((state: RootState) => state.dialogReducer)
  const rentStates = useSelector((state: RootState) => state.rentReducer)

  const [selectRentTab, setSelectRentTab] = useState<number>(0)

  const btnHandle = (btnID: string, params: any) => {
        mp.trigger('client:dailog:select', btnID, JSON.stringify(params))  
  }


  return(
    <>
      {rentVisible && <Rent setSelectRentTab = {setSelectRentTab} selectRentTab = {selectRentTab} vehRentData = {vehRentData}/>}
      <div className="dialog" id={dialogStates.position}>
        <div className="effect-bg"></div>
        <div className="content-inside">
          <div className="header-block">
            <span className="npc-name">{dialogStates.npcName}</span>
            <span className="npc-status">{dialogStates.npcStatus}</span>
          </div>
          <span className="dialog-text">{dialogStates.dialogText}</span>
          <div className="btns-block">
            { dialogStates.buttons.map((btn: IButtonDialog, index: number) => (
              <div className="btn" key={index}>
                <ButtonDialog text={btn.text} id={btn.id} onClick={() => {btnHandle(btn.id, rentVisible ?  rentStates : null)}} />
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}

export default DialogMenu