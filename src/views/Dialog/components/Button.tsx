import { FC } from "react"
import '../assets/styles/compiled-css/Buttons.css'

export interface IButtonDialog {
  text: string,
  id: string,
  onClick: () => void
}

const ButtonDialog: FC<IButtonDialog> = ({ text, id, onClick }) => {
  return(
    <>
      <button className="button-dialog" id={id} onClick={onClick}>{text}</button>
    </>
  )
}

export default ButtonDialog