import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../../../reducer/rootReducer"
import './assets/styles/compiled-css/Gen.css'

import { setGenState } from "../../../../actions/createChar/char"

import { Slider } from './components/Slider'
import { Input } from "./components/Input"

import svgBack from './assets/img/back.svg'
import svgNext from './assets/img/next.svg'


const Gen = () => {
	const dispatch = useDispatch()
	const genState = useSelector((state: RootState) => state.characterReducer.gen)

	const handleSelectGender = (gender: 'male' | 'female') => {
		dispatch(setGenState({ sex: gender }))
	}

	const handleValOne = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setGenState({ valOne: value }))
	}

	const handleValTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		dispatch(setGenState({ valTwo: value }))
	}

	const handleValName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setGenState({ valName: value }))
	}

	const handleValSurname = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setGenState({ valSurname: value }))
	}

	const handleValAge = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		if (value !== '') {
			dispatch(setGenState({ valAge: parseInt(value, 10) }))
		} else {
			dispatch(setGenState({ valAge: '' }))
		}
	}

	const nextFather = () => {
		dispatch(setGenState({ currentFatherIndex: (genState.currentFatherIndex % genState.parents.father.length) + 1 }));
	};

	const prevFather = () => {
		dispatch(setGenState({ currentFatherIndex: (genState.currentFatherIndex - 2 + genState.parents.father.length) % genState.parents.father.length + 1 }));
	};

	const nextMother = () => {
		dispatch(setGenState({ currentMotherIndex: (genState.currentMotherIndex % genState.parents.mother.length) + 1 }));
	};

	const prevMother = () => {
		dispatch(setGenState({ currentMotherIndex: (genState.currentMotherIndex - 2 + genState.parents.mother.length) % genState.parents.mother.length + 1 }));
	};

	useEffect(() => {
		fetch('assets/config/createChar/parents.json')
			.then(response => response.json())
			.then(data => {
				dispatch(setGenState({ parents: data.parents }))
			});
	}, [dispatch]);

  return (
		<>
			<div className='gen-create-char'>
				<div className='parents-section'>
					<div className='parent'>
						<span className='title'>Отец</span>
						<img className='img-parent' src={`assets/img/createChar/parents/father/${genState.currentFatherIndex}.png`} />
						<div className='sliders'>
							<div className='slider' onClick={prevFather}><img src={svgBack} /></div>
							<div className='slider' onClick={nextFather}><img src={svgNext} /></div>
						</div>
					</div>
					<div className='parent'>
						<span className='title'>Мать</span>
						<img className='img-parent' src={`assets/img/createChar/parents/mother/${genState.currentMotherIndex}.png`} />
						<div className='sliders'>
							<div className='slider' onClick={prevMother}><img src={svgBack} /></div>
							<div className='slider' onClick={nextMother}><img src={svgNext} /></div>
						</div>
					</div>
				</div>

				<div className="sex-char">
					<span className="title">Пол персонажа</span>
					<div className="btns">
						<span className={`btn ${genState.sex === 'male' && 'active'}`} onClick={() => handleSelectGender('male')}>Мужской</span>
						<span className={`btn ${genState.sex === 'female' && 'active'}`} onClick={() => handleSelectGender('female')}>Женский</span>
					</div>
				</div>

        <Slider nameSlider="Схожесть" maxValue={100} minValue={0} selectedId={genState.valOne} onChange={handleValOne} />
				<Slider nameSlider="Цвет кожи" maxValue={100} minValue={0} selectedId={genState.valTwo} onChange={handleValTwo} />
				<Input selectedId={genState.valName} nameInput="Имя персонажа" typeInput="text" placeholderInput="Введите имя..." onChange={handleValName} />
				<Input selectedId={genState.valSurname} nameInput="Фамилия персонажа" typeInput="text" placeholderInput="Введите фамилию..." onChange={handleValSurname} />
				<Input selectedId={genState.valAge} nameInput="Возраст персонажа" typeInput="number" placeholderInput="Введите от 18 до 90..." onChange={handleValAge} />
			</div>
		</>
	)
}

export default Gen