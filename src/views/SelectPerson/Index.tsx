import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../reducer/rootReducer"
import './assets/styles/compiled-css/Index.css'

import { hideSelectPerson } from "../../actions/selectPerson/selectPerson";


import { oneTwoSelectPerson, threeSelectPerson } from "../../actions/selectPerson/selectPerson"

import cashSVG from './assets/img/dollar.svg'
import cardSVG from './assets/img/card.svg'
import userSVG from './assets/img/user.svg'
import lockSVG from './assets/img/lock.svg'
import mouseSVG from './assets/img/mouse.svg'

const SelectPerson = () => {
  const dispatch = useDispatch()
  const selectPersonStates = useSelector((state: RootState) => state.selectPersonReducer)
  const [selectPerson, setSelectPerson] = useState<oneTwoSelectPerson | threeSelectPerson>(() => {
    const persons = [selectPersonStates.onePerson, selectPersonStates.twoPerson, selectPersonStates.threePerson];
    const defaultPerson = persons.find((person) => person.rp_name !== '');
    return defaultPerson || null;
  });

  const [selectFreeSlot, setSelectFreeSlot] = useState<string | null>()

  useEffect(() => {
    // Update the selectPerson state when selectPersonStates changes
    const persons = [selectPersonStates.onePerson, selectPersonStates.twoPerson, selectPersonStates.threePerson];
    const defaultPerson = persons.find((person) => person.rp_name !== '');
    setSelectPerson(defaultPerson || null);
  }, [selectPersonStates]);

  const handleClickSelect = () => {
      dispatch(hideSelectPerson())
      mp.trigger('client:close.SelectPerson', selectPerson);
  }

  const handleNewChar = (slot: string) => {
    setSelectFreeSlot(slot)
    mp.trigger('client:click.NewChar', selectFreeSlot)
    // На клиенте или сервере сделать проверку на 3 слот (есть ли донат валюты для открытия донатного слота), если есть - то закрываем меню выбора и перекидываем на создание персонажа
  }

  return (
		<>
			<div className='select-person'>
        <div className="bg-effect"></div>
        <div className="main-section">
          <div className='right-block'>
					<div className='header-section'>
						<span className='rp-name'>{selectPerson?.rp_name}</span>
						<span className='status-person'>{selectPerson?.status}</span>
					</div>
					<ul className='list-persons'>
            {/* Person 1 */}
						{selectPersonStates.onePerson?.rp_name !== '' && (
							<div className={`person-act ${selectPerson === selectPersonStates.onePerson ? 'select' : ''}`} onClick={() => setSelectPerson(selectPersonStates.onePerson)}>
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'>{selectPersonStates.onePerson?.lvl}</span>
                  <div className='right-content'>
                    <div className="header-title">
                      <span className="rp-name">{selectPersonStates.onePerson?.rp_name}</span>
                      <span className="status">{selectPersonStates.onePerson?.status}</span>
                    </div>
                    <div className="money-block">
                      <div className="money">
                        <img className="icon" src={cashSVG} />
                        <span className="text-money">{selectPersonStates.onePerson?.cash}</span>
                      </div>
                      <div className="money">
                        <img className="icon" src={cardSVG} />
                        <span className="text-money">{selectPersonStates.onePerson?.bank}</span>
                      </div>
                    </div>
                    <span className="fraction">Фракция • <span>{selectPersonStates.onePerson?.fraction}</span></span>
                  </div>
								</div>
							</div>
						)}
            { selectPersonStates.onePerson?.rp_name === '' && (
              <div className='person-act' onClick={() => handleNewChar('one')} id="free">
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'><img src={userSVG} /></span>
                  <div className='right-content'>
                    <span className="title">Слот #1</span>
                    <span className="description">Этот слот для персонажа свободный. Нажмите на него, чтобы перейти к созданию персонажа</span>
                  </div>
								</div>
							</div>
            ) }


            {/* Person 2 */}
            {selectPersonStates.twoPerson?.rp_name !== '' && (
							<div className={`person-act ${selectPerson === selectPersonStates.twoPerson ? 'select' : ''}`} onClick={() => setSelectPerson(selectPersonStates.twoPerson)}>
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'>{selectPersonStates.twoPerson?.lvl}</span>
                  <div className='right-content'>
                    <div className="header-title">
                      <span className="rp-name">{selectPersonStates.twoPerson?.rp_name}</span>
                      <span className="status">{selectPersonStates.twoPerson?.status}</span>
                    </div>
                    <div className="money-block">
                      <div className="money">
                        <img className="icon" src={cashSVG} />
                        <span className="text-money">{selectPersonStates.twoPerson?.cash}</span>
                      </div>
                      <div className="money">
                        <img className="icon" src={cardSVG} />
                        <span className="text-money">{selectPersonStates.twoPerson?.bank}</span>
                      </div>
                    </div>
                    <span className="fraction">Фракция • <span>{selectPersonStates.twoPerson?.fraction}</span></span>
                  </div>
								</div>
							</div>
						)}
            { selectPersonStates.twoPerson?.rp_name === '' && (
              <div className='person-act' onClick={() => handleNewChar('two')} id="free">
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'><img src={userSVG} /></span>
                  <div className='right-content'>
                    <span className="title">Слот #2</span>
                    <span className="description">Этот слот для персонажа свободный. Нажмите на него, чтобы перейти к созданию персонажа</span>
                  </div>
								</div>
							</div>
            ) }

            {/* Person 3 [VIP] */}
            {selectPersonStates.threePerson?.activeDonate ? (
							<div className={`person-act ${selectPerson === selectPersonStates.threePerson ? 'select' : ''}`} onClick={() => setSelectPerson(selectPersonStates.threePerson)}>
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'>{selectPersonStates.threePerson?.lvl}</span>
                  <div className='right-content'>
                    <div className="header-title">
                      <span className="rp-name">{selectPersonStates.threePerson?.rp_name}</span>
                      <span className="status">{selectPersonStates.threePerson?.status}</span>
                    </div>
                    <div className="money-block">
                      <div className="money">
                        <img className="icon" src={cashSVG} />
                        <span className="text-money">{selectPersonStates.threePerson?.cash}</span>
                      </div>
                      <div className="money">
                        <img className="icon" src={cardSVG} />
                        <span className="text-money">{selectPersonStates.threePerson?.bank}</span>
                      </div>
                    </div>
                    <span className="fraction">Фракция • <span>{selectPersonStates.threePerson?.fraction}</span></span>
                  </div>
								</div>
							</div>
						) : (
              <div className='person-act' onClick={() => handleNewChar('three')} id="donate">
								<div className='line'></div>
								<div className='selection-person'>
                  <span className='left-content'><img src={lockSVG} /></span>
                  <div className='right-content'>
                    <span className="title">Слот заблокирован</span>
                    <span className="description">Данный слот заблокирован. <br/>Чтобы его открыть, вам надо его приобрести</span>
                  </div>
								</div>
							</div>
            )}
					</ul>
          <button className="select-person-btn" onClick={handleClickSelect}>Выбрать персонажа</button>
				</div>
        </div>
				
        <div className="help-move">
          <span className="text">Поворот персонажа</span>
          <div className="icon-mouse"><img src={mouseSVG} /></div>
        </div>

			</div>
		</>
	)
}

export default SelectPerson