import { useState, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../reducer/rootReducer'
import { FC } from 'react'
import './assets/styles/compiled-css/Face.css'

import { Slider } from './components/Slider'
import { Switch } from './components/Switch'
import { setFaceState } from '../../../../actions/createChar/char'

import { switchData } from '../../../../configs/createChar/switch.data'

interface ISetCustomize {
	setCustomization: any;
  }
  

const Main: FC<ISetCustomize> = ({setCustomization}) => {
	const dispatch = useDispatch()
	const faceState = useSelector((state: RootState) => state.characterReducer.face)

	const [diseasesSkinId, setDiseasesSkinId] = useState<number>(1)
	const switchDiseasesSkin = switchData[0].diseasesSkin
	const currentDiseasesSkin = switchDiseasesSkin.find(item => item.id === diseasesSkinId)

	// Общее
  const handleValHeightbrow = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valHeightbrow: value }))
		setCustomization()
	}

  const handleValDepthbrow = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valDepthbrow: value }))
		setCustomization()
	}

  const handleValHeightcheek = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valHeightcheek: value }))
		setCustomization()
	}

  const handleValWidthcheek = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valWidthcheek: value }))
		setCustomization()
	}

  const handleValDepthcheek = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valDepthcheek: value }))
		setCustomization()
	}

	const handleValWidthjaw = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valWidthjaw: value }))
		setCustomization()
	}
	const handleValShapejaw = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valShapejaw: value }))
		setCustomization()
	}
	const handleValHeightchin = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valHeightchin: value }))
		setCustomization()
	}
	const handleValWidthchin = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valWidthchin: value }))
		setCustomization()
	}
	const handleValDepthchin = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valDepthchin: value }))
		setCustomization()
	}

	const handleValIndentchin = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valIndentchin: value }))
		setCustomization()
	}

	const handleValGirthneck = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valGirthneck: value }))
		setCustomization()
	}

	// Нос
	const handleValWidthnose = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valWidthnose: value }))
		setCustomization()
	}

	const handleValHeightnose = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valHeightnose: value }))
		setCustomization()
	}
	
	const handleValLenghttip = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valLenghttip: value }))
		setCustomization()
	}
	
	const handleValHeighttip = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valHeighttip: value }))
		setCustomization()
	}

	const handleValDepthtip = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valDepthtip: value }))
		setCustomization()
	}

	const handleValBreakagenose = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valBreakagenose: value }))
		setCustomization()
	}

	// Глаза и губы
	const handleValFoldsEye = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valFoldseye: value }))
		setCustomization()
	}

	const handleValThicknesslips = (event: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setFaceState({ valThicknesslips: value }))
		setCustomization()
	}

	// Кожа
	const handleChangeDiseasesSkin = (newId: number) => {
		setDiseasesSkinId(newId)
	}

	return (
		<>
			<div className='face-create-char'>
        <div className="section">
          <span className="name-section">Форма лица</span>
					<div className="list">
						<Slider nameSlider='Высота бровей' minValue={0} maxValue={100} selectedId={faceState.valHeightbrow} onChange={handleValHeightbrow} />
						<Slider nameSlider='Глубина бровей' minValue={0} maxValue={100} selectedId={faceState.valDepthbrow} onChange={handleValDepthbrow} />
						<Slider nameSlider='Высота скул' minValue={0} maxValue={100} selectedId={faceState.valHeightcheek} onChange={handleValHeightcheek} />
						<Slider nameSlider='Ширина скул' minValue={0} maxValue={100} selectedId={faceState.valWidthcheek} onChange={handleValWidthcheek} />
						<Slider nameSlider='Глубина щеки' minValue={0} maxValue={100} selectedId={faceState.valDepthcheek} onChange={handleValDepthcheek} />
						<Slider nameSlider='Ширина челюсти' minValue={0} maxValue={100} selectedId={faceState.valWidthjaw} onChange={handleValWidthjaw} />
						<Slider nameSlider='Форма челюсти' minValue={0} maxValue={100} selectedId={faceState.valShapejaw} onChange={handleValShapejaw} />
						<Slider nameSlider='Высота подбородка' minValue={0} maxValue={100} selectedId={faceState.valHeightchin} onChange={handleValHeightchin} />
						<Slider nameSlider='Ширина подбородка' minValue={0} maxValue={100} selectedId={faceState.valWidthchin} onChange={handleValWidthchin} />
						<Slider nameSlider='Глубина подбордка' minValue={0} maxValue={100} selectedId={faceState.valDepthchin} onChange={handleValDepthchin} />
						<Slider nameSlider='Подбородочный отступ' minValue={0} maxValue={100} selectedId={faceState.valIndentchin} onChange={handleValIndentchin} />
						<Slider nameSlider='Обхват шеи' minValue={0} maxValue={100} selectedId={faceState.valGirthneck} onChange={handleValGirthneck} />
					</div>
        </div>
				<div className="section">
          <span className="name-section">Форма носа</span>
					<div className="list">
						<Slider nameSlider='Ширина носа' minValue={0} maxValue={100} selectedId={faceState.valWidthnose} onChange={handleValWidthnose} />
						<Slider nameSlider='Высота носа' minValue={0} maxValue={100} selectedId={faceState.valHeightnose} onChange={handleValHeightnose} />
						<Slider nameSlider='Длина кончика носа' minValue={0} maxValue={100} selectedId={faceState.valLenghttip} onChange={handleValLenghttip} />
						<Slider nameSlider='Высота кончика носа' minValue={0} maxValue={100} selectedId={faceState.valHeighttip} onChange={handleValHeighttip} />
						<Slider nameSlider='Глубина моста носа' minValue={0} maxValue={100} selectedId={faceState.valDepthtip} onChange={handleValDepthtip} />
						<Slider nameSlider='Поломаность носа' minValue={0} maxValue={100} selectedId={faceState.valBreakagenose} onChange={handleValBreakagenose} />
					</div>
        </div>
				<div className="section">
          <span className="name-section">Глаза и губы</span>
					<div className="list">
						<Slider nameSlider='Складки век' minValue={0} maxValue={100} selectedId={faceState.valFoldseye} onChange={handleValFoldsEye} />
						<Slider nameSlider='Толщина губ' minValue={0} maxValue={100} selectedId={faceState.valThicknesslips} onChange={handleValThicknesslips} />
					</div>
        </div>
				<div className="section">
          <span className="name-section">Кожа</span>
					<Switch
						nameSwitch={currentDiseasesSkin?.nameSwitch || ''}
						selectedId={diseasesSkinId}
						items={switchDiseasesSkin}
						onChange={handleChangeDiseasesSkin}
					/>
        </div>
      </div>
		</>
	)
}

export default Main