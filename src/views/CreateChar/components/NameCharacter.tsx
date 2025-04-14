import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import { Input } from "../components/elements/components/Input"
import { setGenState } from "../../../actions/createChar/char"

import './styles/NameCharacter.css'

import svgArrowDown from './elements/assets/img/arrowdown.svg'

interface IShowMainCustomozation {
	setShowMain: Dispatch<SetStateAction<boolean>>;
  }

const NameCharacter = ({ setShowMain }: IShowMainCustomozation) => {
    const dispatch = useDispatch()
    const genState = useSelector((state: RootState) => state.characterReducer.gen)

		const toggleShowMain = () => setShowMain(prev => !prev);

    const [nationalChoise, setNationalChoise] = useState<boolean>(false)
		const [showNameCgarcter, setShowNameCgarcter] = useState<boolean>(true)
    const [national, setNational] = useState<any>([
		{
			title: 'Выберите национальность',
			desc: 'Ваша национальность никак не влияет на внешность. Внешность выбирается следующим шагом.',
			nationality: [
				"Абхаз",
				"Австралиец",
				"Австриец",
				"Адыг",
				"Азербайджанец",
				"Американец",
				"Аргентинец",
				"Армянин",
				"Белорус",
				"Бельгиец",
				"Бразилец",
				"Британец",
				"Венесуэлец",
				"Вьетнамец",
				"Гаваец",
				"Гватемалец",
				"Грек",
				"Грузин",
				"Дагестанец",
				"Датчанин",
				"Доминиканец",
				"Египтянин",
				"Израильтянин",
				"Ингуш",
				"Индиец",
				"Ирландец",
				"Исландец",
				"Испанец",
				"Итальянец",
				"Казах",
				"Камбоджиец",
				"Канадец",
				"Кениец",
				"Кениец",
				"Китаец",
				"Колумбиец",
				"Конголезец",
				"Кореец",
				"Кубинец",
				"Латыш",
				"Литовец",
				"Марокканец",
				"Мексиканец",
				"Молдаванин",
				"Монгол",
				"Немец",
				"Нидерландец",
				"Новозеландец",
				"Осетин",
				"Перуанец",
				"Поляк",
				"Португалец",
				"Пуэрториканец",
				"Румын",
				"Русский",
				"Сальвадорец",
				"Серб",
				"Сингапурец",
				"Словак",
				"Таджик",
				"Танзаниец",
				"Татарин",
				"Тунисец",
				"Турок",
				"Узбек",
				"Украинец",
				"Филиппинец",
				"Финн",
				"Француз",
				"Хорват",
				"Черкес",
				"Черногорец",
				"Чех",
				"Чеченец",
				"Швейцарец",
				"Шотландец",
				"Эквадорец",
				"Эстонец",
				"Ямаец",
				"Японец"
			],
			index_help: 0,
		}
	],

	)

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

        const handleChangeNationality = (id: number) => {
            setNational((prevSlide: any) => {
                return prevSlide.map((item: any, index: number) => 
                    index === 0 ? { ...item, index_help: id } : item
                )
            })
            dispatch(setGenState({ valNational: national[0].nationality[id] }))
        }

				const saveUser = () => {
					try {
								mp.trigger('client:events:custom:register', // eslint-disable-line
										genState.valName, genState.valSurname, genState.valAge, genState.valPromo, genState.valRefer, genState.valNational);
										setShowNameCgarcter(false)
										toggleShowMain();
						} catch (e) {
								console.log(e);
						}
				}


    return (
        <>
        <div className={`nameCharacterwrapper ${showNameCgarcter ? "" : "hidden"}`}>
            <div className="nameCharacterContainer">
            <div className="national_container">
				<span className="title_box">Введите свои данные</span>
				<span className="title">Национальность</span>
				<div className="national">
					{national[0].nationality[national[0].index_help]} 
					<span onClick={() => { !nationalChoise ? setNationalChoise(true) : setNationalChoise(false)}}>
					<img className= {`arrow ${nationalChoise ? 'active' : ''}`} src={svgArrowDown} />	
					</span>
				</div>
				<div className={`nationalChoise ${nationalChoise ? 'show' : ''}`}>
					{
						national[0].nationality.map((item: any, id: number) =>{
							return (
								<div className = 'nationality'  id = {`${id}`} key = {id} onClick={() => {handleChangeNationality(id)}}>
									{item}
								</div>
								)
						})
					}
				</div>
			</div>

        <Input selectedId={genState.valName} nameInput="Имя персонажа" typeInput="text" placeholderInput="Введите имя..." onChange={handleValName} />
				<Input selectedId={genState.valSurname} nameInput="Фамилия персонажа" typeInput="text" placeholderInput="Введите фамилию..." onChange={handleValSurname} />
				<Input selectedId={genState.valAge} nameInput="Возраст персонажа" typeInput="number" placeholderInput="Введите от 18 до 90..." onChange={handleValAge} />
				<Input selectedId={genState.valPromo} nameInput="Поромокод (Если есть)" typeInput="text" placeholderInput="Ввидите поомокод (Если есть)..." onChange={handleValPromo} />
				<Input selectedId={genState.valRefer} nameInput="Ник пригласившего (Если есть) " typeInput="text" placeholderInput="Ник пригласившего (Если есть)..." onChange={handleValRefer} />

				<button className='btn-create-char' onClick={saveUser}>Сохранить персонажа</button>

          </div>
        </div>
        </>
    )
}

export default NameCharacter