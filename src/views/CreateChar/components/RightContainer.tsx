import { Dispatch, FC, SetStateAction, useState } from 'react'
import './styles/RightContainer.css'
import { RootState } from "../../../reducer/rootReducer.ts"
import { useDispatch, useSelector } from 'react-redux'

import Gen from "./elements/Gen.tsx";
import Main from "./elements/Main.tsx";
import Hair from "./elements/Hair.tsx";
import Clothes from "./elements/Clothes.tsx";


interface IRightContainer {
  selectedTab: string,
  setShowMain: Dispatch<SetStateAction<boolean>>,
  setLastTab: Dispatch<SetStateAction<boolean>>
}

const RightContainer: FC<IRightContainer> = ({ selectedTab, setShowMain, setLastTab }) => {
  let content

  const genState = useSelector((state: RootState) => state.characterReducer.gen)
  const faceState = useSelector((state: RootState) => state.characterReducer.face)
  const [input_editor_face, setInputEditorFace] = useState<any>([
    {name: 'Высота бровей', value: 0},
    {name: 'Глубина бровей', value: 0},
    {name: 'Высота скул', value: 0},
    {name: 'Ширина скул', value: 0},
    {name: 'Глубина щеки', value: 0},
    {name: 'Ширина челюсти', value: 0},
    {name: 'Форма челюсти', value: 0},
    {name: 'Высота подбородка', value: 0},
    {name: 'Ширина подбородка', value: 0},
    {name: 'Глубина подбородка', value: 0},
    {name: 'Подбородочный отступ', value: 0},
    {name: 'Обхват шеи', value: 0},
])
const [input_editor_nose, setInputEditorNose] = useState<any>([
    {name: 'Ширина носа', value: 0},
    {name: 'Высота носа', value: 0},
    {name: 'Длина кончика носа', value: 0},
    {name: 'Высота кончика носа', value: 0},
    {name: 'Глубина моста носа', value: 0},
    {name: 'Поломаность носа', value: 0},
])
const [input_editor_eyes_lips, setInputEditorEyesLips] = useState<any>(
 [
    {name: 'Складки век', value: 0},
    {name: 'Толщина губ', value: 0},
 ]
)

const [input_editor_face_last, setInputEditorFaceLast] = useState<any>(
  [
    {title: "Прическа", maxVal: 72, index_help: 1},
    {title: "Стиль причёски", maxVal: 72, index_help: 0},
    {title: "Цвет волос", maxVal: 64, index_help: 0},
    {title: "Мелирование волос", maxVal: 64, index_help: 0},
    {title: "Брови", maxVal: 31, index_help: 0},
    {title: "Цвет бровей", maxVal: 64, index_help: 0},
    {title: "Цвет глаз", maxVal: 32, index_help: 0},
    {title: "Веснушки", maxVal: 17, index_help: 0},
  ]
)
 


  const setCustomization = (id: number, name: string) => {
    setInputEditorFace((prevSlide: any) => {
        return prevSlide.map((item: any) => {
            if (item.name === 'Высота бровей') {
                return { ...item, value: faceState.valHeightbrow };
            }
            if (item.name === 'Глубина бровей') {
                return { ...item, value: faceState.valDepthbrow };
            }
            if (item.name === 'Высота скул') {
                return { ...item, value: faceState.valHeightcheek };
            }
            if (item.name === 'Ширина скул') {
                return { ...item, value: faceState.valWidthcheek };
            }
            if (item.name === 'Глубина щеки') {
                return { ...item, value: faceState.valDepthcheek };
            }
            if (item.name === 'Ширина челюсти') {
                return { ...item, value: faceState.valWidthjaw };
            }
            if (item.name === 'Форма челюсти') {
                return { ...item, value: faceState.valShapejaw };
            }
            if (item.name === 'Высота подбородка') {
                return { ...item, value: faceState.valHeightchin };
            }
            if (item.name === 'Ширина подбородка') {
                return { ...item,valuep: faceState.valWidthchin };
            }
            if (item.name === 'Глубина подбородка') {
                return { ...item, value: faceState.valDepthchin };
            }
            if (item.name === 'Подбородочный отступ') {
                return { ...item, value: faceState.valIndentchin };
            }
            if (item.name === 'Обхват шеи') {
                return { ...item, value: faceState.valGirthneck };
            }
            return item; //Возврат невыбранного элемента
        });
      })

      setInputEditorNose((prevSlide: any) => {
        return prevSlide.map((item: any) => {
            if (item.name === 'Ширина носа') {
                return { ...item, value: faceState.valWidthnose };
            }
            if (item.name === 'Высота носа') {
                return { ...item, value: faceState.valHeightnose };
            }
            if (item.name === 'Длина кончика носа') {
                return { ...item, value: faceState.valLenghttip };
            }
            if (item.name === 'Высота кончика носа') {
                return { ...item, value: faceState.valHeighttip };
            }
            if (item.name === 'Глубина моста носа') {
                return { ...item, value: faceState.valDepthtip };
            }
            if (item.name === 'Поломаность носа') {
                return { ...item, value: faceState.valBreakagenose };
            }
          
            return item; // Возврат невыбранного элемента
        });
      })

      setInputEditorEyesLips((prevSlide: any) => {
        return prevSlide.map((item: any) => {
            if (item.name === 'Складки век') {
                return { ...item, value: faceState.valFoldseye };
            }
            if (item.name === 'Толщина губ') {
                return { ...item, value: faceState.valThicknesslips };
            }
            return item; // Возврат невыбранного элемента
        });
      })

      setInputEditorFaceLast((prevSlide: any) => {
        return prevSlide.map((item: any) => {
            if (item.title === name) {
                return { ...item, index_help: id};
            }
            return item; //Возврат невыбранного элемента
        });
      })

    try {
        mp.trigger('client:events:custom:set' // eslint-disable-line
            , JSON.stringify(input_editor_face), JSON.stringify(input_editor_nose)
            , JSON.stringify(input_editor_eyes_lips), JSON.stringify(input_editor_face_last), genState.sex
            , genState.currentMotherIndex - 1, genState.currentFatherIndex - 1, genState.valOne, genState.valTwo, false)
    } catch (e) {
        console.log(e);
    }
}

const saveUser = () => {
    try {
          mp.trigger('client:events:custom:register', // eslint-disable-line
              genState.valName, genState.valSurname, genState.valAge, genState.valPromo, genState.valRefer, genState.valNational);
      } catch (e) {
          console.log(e);
      }
  }

  const createUser = () => {
    try {
        mp.trigger('client:events:custom:set' // eslint-disable-line
            , JSON.stringify(input_editor_face), JSON.stringify(input_editor_nose)
            , JSON.stringify(input_editor_eyes_lips), JSON.stringify(input_editor_face_last), genState.sex
            , genState.currentMotherIndex - 1, genState.currentFatherIndex - 1, genState.valOne, genState.valTwo, true)
      } catch (e) {
        console.log(e);
      } 
      mp.trigger('client:events:custom:save', // eslint-disable-line
      50, 50, 50, 50, 50, 50, 50);
      setShowMain(false)
      setLastTab(true)

  }

  switch (selectedTab) {
    case 'gen':
      content = <Gen setCustomization = {setCustomization}/>
      break
    case 'face':
      content = <Main setCustomization = {setCustomization}/>
      break
    case 'hair':
      content = <Hair setCustomization = {setCustomization}/>
      break
    case 'clothes':
      content = <Clothes />
      break
    default:
      content = null
  }

		return <div className='right-container'>
            {content}
            <button className='btn-create-char' onClick={createUser}>Создать персонажа</button>
            </div>
}

export default RightContainer