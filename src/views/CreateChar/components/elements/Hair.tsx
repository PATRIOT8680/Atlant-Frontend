import { useState } from 'react'
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

const Hair = () => {
	const genderChar = useSelector((state: RootState) => state.genderReducer)
	const hairstyle = hairstyleData[0][genderChar as keyof IHairstyleData]
	const eyebrows = eyebrowsData[0][genderChar as keyof IEyebrowsData]

	const [hairId, setHairId] = useState<number | null>(1)
	const [eyebrowId, setEyebrowId] = useState<number | null>(1)
	const [colorHair, setColorHair] = useState<string>('black')
	const [colorEyebrow, setColorEyebrow] = useState<string>('black')
	const [colorEye, setColorEye] = useState<string>('black')
	const [highlighting, setHighlighting] = useState<string>('black')

	// switch
	const switchHairStyle = switchData[0].styleHair
	const switchFreckles = switchData[0].freckles
	const [styleHairId, setStyleHairId] = useState<number>(1)
	const [frecklesId, setFrecklesId] = useState<number>(1)

	const currentStyleHair = switchHairStyle.find(item => item.id === styleHairId)
	const currentFreckles = switchFreckles.find(item => item.id === frecklesId)

	const handleClickHair = (id: number) => {
		setHairId(id)
	}

	const handleClickEyebrow = (id: number) => {
		setEyebrowId(id)
	}

	const handleChangeHairStyle = (newId: number) => {
		setStyleHairId(newId)
	}

	const handleChangeFreckles = (newId: number) => {
		setFrecklesId(newId)
	}

	return (
		<>
			<div className='hair-create-char'>
				<div className='section'>
					<span className='title'>Прическа</span>
					<ul className='list'>
						{hairstyle.map((hair, index) => (
							<div
								className={`hair ${hairId === hair.id ? 'active' : ''}`}
								onClick={() => handleClickHair(hair.id)}
								key={index}
							>
								<img
									className='img-hair'
									src={`assets/img/createChar/hairstyle/${genderChar}/${hair.id}.png`}
								/>
							</div>
						))}
					</ul>
				</div>
				<div className='section'>
					<span className='title'>Брови</span>
					<ul className='list'>
						{eyebrows.map((eyebrow, index) => (
							<div
								className={`hair ${eyebrowId === eyebrow.id ? 'active' : ''}`}
								onClick={() => handleClickEyebrow(eyebrow.id)}
								key={index}
							>
								<img
									className='img-hair'
									src={`assets/img/createChar/eyebrows/${genderChar}/${eyebrow.id}.png`}
								/>
							</div>
						))}
					</ul>
				</div>

				<div className="colors">
					<span className="title">Цвет волос</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${colorHair === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => setColorHair(color.name)}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

				<div className="colors">
					<span className="title">Мелирование</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${highlighting === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => setHighlighting(color.name)}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

				<div className="colors">
					<span className="title">Цвет бровей</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${colorEyebrow === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => setColorEyebrow(color.name)}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

				<div className="colors">
					<span className="title">Цвет глаз</span>
					<ul className="squares">
						{colorsData.map((color, index) => (
							<div 
								className={`square ${colorEye === color.name ? 'active' : ''}`}
								style={{background: `${color.hex}`}}
								onClick={() => setColorEye(color.name)}
								key={index}
							>

							</div>
						))}
					</ul>
				</div>

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
