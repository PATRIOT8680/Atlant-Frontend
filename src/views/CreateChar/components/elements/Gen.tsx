import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../../../reducer/rootReducer"
import { FC } from 'react'
import './assets/styles/Gen.css'

import { setGenState } from "../../../../actions/createChar/char"

import { Slider } from './components/Slider'
import { Input } from "./components/Input"

import svgBack from './assets/img/back.svg'
import svgNext from './assets/img/next.svg'
import svgArrowDown from './assets/img/arrowdown.svg'


interface ISetCustomize {
  setCustomization: any;
}

const Gen: FC<ISetCustomize> = ({ setCustomization }) => {
	const dispatch = useDispatch()
	const genState = useSelector((state: RootState) => state.characterReducer.gen)
	
	const [nationalChoise, setNationalChoise] = useState<boolean>(false)

	const [cheked_sex, setChekedSex] = useState<boolean>(false)
	const [slider, setSlider] = useState<any>([
        {
            title: "Мать",
            parents: ["Дарлин", "Обри", "Жасмин", "Жизель", "Амелия", "Изабелла", "Зои", "Ава", "Камилла", "Вайолет", "София", "Эйлин", "Николь", "Эшли", "Грейс", "Брианна", "Натали", "Оливия", "Элизабет", "Кэтрин", "Эмма", "Мисти"],
            index_help: 0
        },
        {
            title: "Отец",
            parents: ["Бенджамин", "Эллиот", "Эдвард", "Ной", "Андре", "Джоан", "Алекс", "Исаак", "Эвон", "Итон", "Винсент", "Анжел", "Диего", "Адриан", "Габриель", "Майкл", "Сантьяго", "Кевин", "Луис", "Самюэль", "Энтони", "Клайд", "Нико", "Джон"],
            index_help: 0
        },
        { title: "Сходство", index_help: 10 },
        { title: "Кожа", index_help: 10 }
    ]);



	const setSex = () => {
        try {
            mp.trigger('client:events:custom:setSex' // eslint-disable-line
                , cheked_sex)
        } catch (e) {
            console.log(e);
        }
    }

	const handleSelectGender = (gender: 'male' | 'female') => {
		if(gender !== 'male'){
			setChekedSex(true)
		}else{
			setChekedSex(false)
		}
		setSex()
		dispatch(setGenState({ sex: gender }))
	}

	const handleValOne = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 2 ? { ...item, index_help: value } : item
            )
		})
		dispatch(setGenState({ valOne: value }))
		setCustomization();
	}

	const handleValTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value, 10)
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 3 ? { ...item, index_help: value } : item
            )
		})
		dispatch(setGenState({ valTwo: value }))
		setCustomization();
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

	const handleValPromo = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setGenState({ valPromo: value }))
	}

	const handleValRefer = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setGenState({ valRefer: value }))
	}

	const nextFather = () => {
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 1 ? { ...item, index_help: genState.currentFatherIndex } : item
            )
		})
		dispatch(setGenState({ currentFatherIndex: (genState.currentFatherIndex % genState.parents.father.length) + 1 }));
		setCustomization();
	};

	const prevFather = () => {
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 1 ? { ...item, index_help: genState.currentFatherIndex } : item
            )
		})
		dispatch(setGenState({ currentFatherIndex: (genState.currentFatherIndex - 2 + genState.parents.father.length) % genState.parents.father.length + 1 }));
		setCustomization();
	};

	const nextMother = () => {
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 0 ? { ...item, index_help: genState.currentMotherIndex } : item
            )
		})
		dispatch(setGenState({ currentMotherIndex: (genState.currentMotherIndex % genState.parents.mother.length) + 1 }));
		setCustomization();
	};

	const prevMother = () => {
		setSlider((prevSlide: any) => {
			return prevSlide.map((item: any, index: number) => 
                index === 0 ? { ...item, index_help: genState.currentMotherIndex } : item
            )
		})
		dispatch(setGenState({ currentMotherIndex: (genState.currentMotherIndex - 2 + genState.parents.mother.length) % genState.parents.mother.length + 1 }));
		setCustomization();
	};


	useEffect(() => {
		fetch('/assets/config/createChar/parents.json')
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
						<img className='img-parent' src={`/assets/img/createChar/parents/father/id${(genState.currentFatherIndex)-1}.png`} />
						<div className='sliders'>
							<div className='slider' onClick={prevFather}><img src={svgBack} /></div>
							<div className='slider' onClick={nextFather}><img src={svgNext} /></div>
						</div>
					</div>
					<div className='parent'>
						<span className='title'>Мать</span>
						<img className='img-parent' src={`/assets/img/createChar/parents/mother/id${(genState.currentMotherIndex)-1}.png`} />
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
	
			</div>
		</>
	)
}

export default Gen