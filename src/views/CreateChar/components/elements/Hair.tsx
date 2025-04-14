import { useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../reducer/rootReducer'
import './assets/styles/compiled-css/Hair.css'

import { Switch } from './components/Switch'

import { hairstyleData } from '../../../../configs/createChar/hairstyle.data'
import { eyebrowsData } from '../../../../configs/createChar/eyebrows.data'
import { IHairstyleData } from '../../../../configs/createChar/hairstyle.data'
import { IEyebrowsData } from '../../../../configs/createChar/eyebrows.data'
import { switchData } from '../../../../configs/createChar/switch.data'
import { colorsData } from '../../../../configs/createChar/colors.data'

interface ISetCustomize {
	setCustomization: any;
  }

const Hair: FC<ISetCustomize> = ({ setCustomization }) => {
	const genderChar = useSelector((state: RootState) => state.genderReducer)
	const hairstyle = hairstyleData[0][genderChar as keyof IHairstyleData]
	const eyebrows = eyebrowsData[0][genderChar as keyof IEyebrowsData]

	const [hairId, setHairId] = useState<number>(0)
	const [eyebrowId, setEyebrowId] = useState<number>(0)
	const [colorHair, setColorHair] = useState<string>('black')
	const [colorEyebrow, setColorEyebrow] = useState<string>('black')
	const [highlighting, setHighlighting] = useState<string>('black')
	const [squareChoise, setSquareChoise] = useState<boolean>(false)

	// switch
	const switchHairStyle = switchData[0].styleHair
	const switchFreckles = switchData[0].freckles
	const switchColorEye = switchData[0].colorEye
	const switchHair = switchData[0].hair
	const switchEyebrow = switchData[0].eyebrow
	const [colorEyeId, setColorEyeId] = useState<number>(1)
	const [styleHairId, setStyleHairId] = useState<number>(1)
	const [frecklesId, setFrecklesId] = useState<number>(1)

	const currentHair = switchHair.find(item => item.id === hairId)
	const currentEyebrow = switchEyebrow.find(item => item.id === eyebrowId)
	const currentColorEye = switchColorEye.find(item => item.id === colorEyeId)
	const currentStyleHair = switchHairStyle.find(item => item.id === styleHairId)
	const currentFreckles = switchFreckles.find(item => item.id === frecklesId)

	const handleClickHair = (newId: number) => {
		setHairId(newId)
		setCustomization(newId, 'Прическа')
	}

	const handleClickEyebrow = (newId: number) => {
		setEyebrowId(newId)
		setCustomization(newId, 'Брови')
	}

	const handleChangeHairStyle = (newId: number) => {
		setStyleHairId(newId)
		setCustomization(newId, 'Стиль причёски')
	}

	const handleChangeFreckles = (newId: number) => {
		setFrecklesId(newId)
		setCustomization(newId, 'Веснушки')
	}

	const handleClickColor = (id: number, name: string) => {
		setCustomization(id, name)
	}
	const handleClickEyeColor = (newId: number) => {
		setColorEyeId(newId)
		setCustomization(newId, 'Цвет глаз')
	}

	return (
		<>
			<div className='hair-create-char'>
				{/* <div className='section'>
					<span className='title'>Прическа</span>
					<ul className='list'>
						{hairstyle.map((hair, index) => (
							<div
								className={`hair ${hairId === hair.id ? 'active' : ''}`}
								onClick={() => handleClickHair(hair.id, 'Прическа')}
								key={index}
							>
								<img
									className='img-hair'
									src={`/assets/img/createChar/hairstyle/${genderChar}/${hair.id}.png`}
								/>
							</div>
						))}
					</ul>
				</div> */}
				{/* <div className='section'>
					<span className='title'>Брови</span>
					<ul className='list'>
						{eyebrows.map((eyebrow, index) => (
							<div
								className={`hair ${eyebrowId === eyebrow.id ? 'active' : ''}`}
								onClick={() => handleClickEyebrow(eyebrow.id, "Брови")}
								key={index}
							>
								<img
									className='img-hair'
									src={`/assets/img/createChar/eyebrows/${genderChar}/${eyebrow.id}.png`}
								/>
							</div>
						))}
					</ul>
				</div> */}

				<Switch
					nameSwitch={currentHair?.nameSwitch || ''}
					selectedId={hairId}
					items={switchHair}
					onChange={handleClickHair}
				/>	

				<Switch
					nameSwitch={currentEyebrow?.nameSwitch || ''}
					selectedId={eyebrowId}
					items={switchEyebrow}
					onChange={handleClickEyebrow}
				/>

				<div className="colors">
					<span className="title">Цвет волос</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${colorHair === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => {
									setColorHair(color.name);
									handleClickColor(index, 'Цвет волос');
								}}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

				<div className="colors">
					<span className="title">Мелирование</span>
					<div className="squares">
						{colorsData.map((color, index) => (
		
								<div 
								className={`square ${highlighting === color.name ? 'active' : ''}`}
								id = {squareChoise ? 'show' : ''}
								style={{background: `${color.hex}`}}
								onClick={() => {
									setHighlighting(color.name);
									handleClickColor(index, 'Мелирование волос');
								}}
								key={index}
								>
								</div>
		
						))}
						
					</div>
				</div>

				<div className="colors">
					<span className="title">Цвет бровей</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${colorEyebrow === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => {
									setColorEyebrow(color.name);
									handleClickColor(index, 'Цвет бровей');
								}}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

				<Switch
					nameSwitch={currentColorEye?.nameSwitch || ''}
					selectedId={colorEyeId}
					items={switchColorEye}
					onChange={handleClickEyeColor}
				/>		
				<Switch
					nameSwitch={currentStyleHair?.nameSwitch || ''}
					selectedId={styleHairId}
					items={switchHairStyle}
					onChange={handleChangeHairStyle}
				/>

				<Switch
					nameSwitch={currentFreckles?.nameSwitch || ''}
					selectedId={frecklesId}
					items={switchFreckles}
					onChange={handleChangeFreckles}
				/>
			</div>
		</>
	)
}

export default Hair
