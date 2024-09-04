import { useSelector } from "react-redux"
import { RootState } from "../../reducer/rootReducer"
import './assets/styles/compiled-css/Index.css'

import ButtonDialog from "./components/Button"
import { IButtonDialog } from "./components/Button"

const DialogMenu = () => {
  const dialogStates = useSelector((state: RootState) => state.dialogReducer)

  return(
    <>
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
                <ButtonDialog text={btn.text} id={btn.id} onClick={btn.onClick} />
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}

export default DialogMenu