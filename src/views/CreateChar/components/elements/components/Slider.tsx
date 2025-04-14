import { FC } from "react"
import './compiled-css/Slider.css'

interface ISlider {
	nameSlider: string
	maxValue: number
	minValue: number
	selectedId: number
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Slider: FC<ISlider> = ({ nameSlider, maxValue, minValue, selectedId, onChange }) => {
  return (
		<>
			<div className='slider'>
				<div className='text-section'>
					<span className='name-slider'>{nameSlider}</span>
					<span>{selectedId}</span>
				</div>
				<input
					className='range'
					type='range'
					max={maxValue}
					min={minValue}
					value={selectedId}
					onChange={onChange}
				/>
			</div>
		</>
	)
}