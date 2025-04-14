import { FC } from 'react'
import './compiled-css/Input.css'

interface IInput {
	nameInput: string
	typeInput: string,
  placeholderInput: string,
	selectedId: number | string,
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input: FC<IInput> = ({
	nameInput,
	typeInput,
  placeholderInput,
	selectedId,
	onChange,
}) => {
	return (
		<>
			<div className='input'>
				<span className='name-input'>{nameInput}</span>
				<input
					type={typeInput}
					value={selectedId}
          placeholder={placeholderInput}
					onChange={onChange}
				/>
			</div>
		</>
	)
}
