import { useState, FC } from "react"
import './assets/styles/compiled-css/Modal.css'

import svg_close from './assets/img/Modal/close.svg'

export interface IInputs {
  name: string
}

export interface IModal {
  name: string | null,
  shortName: string | null,
  inputs: IInputs[] | null,
  button: string | null,
  data?: any,
  onClose: () => void,
  onOpen: () => void
}

const Modal: FC<IModal> = ({name, shortName, inputs, button, data, onClose, onOpen}) => {
  const [inputValues, setInputValues] = useState<string[]>(inputs ? Array(inputs.length).fill('') : [])

  const handleChangeInput = (index: number, value: string) => {
    const newValues = [...inputValues]
    newValues[index] = value

    setInputValues(newValues)
  }

  const handleSubmit = () => {
    mp.trigger(`cef:adminMenu:modal`, shortName, inputValues, data)
  }

  return(
    <>
      <div className="bg" onClick={onClose}></div>
      <div className="modal-menu">
        <div className="header-modal">
          <span className="name">{name}</span>
          <img src={svg_close} className="close" onClick={onClose} />
        </div>
        <ul className="list-inputs">
          { inputs !== null ? inputs.map((input, index) => (
            <input key={index} type="text" placeholder={input.name + '...'} value={inputValues[index]} onChange={(e) => handleChangeInput(index, e.target.value)} />
          )) : null }
        </ul>
        <button className="btn" onClick={handleSubmit}>{button}</button>
      </div>
    </>
  )
}

export default Modal