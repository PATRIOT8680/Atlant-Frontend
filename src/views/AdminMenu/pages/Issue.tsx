import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer.ts'
import './assets/styles/compiled-css/Issue.css'

import { EventManager } from '../../../util/eventmanager.ts'
import { useModal } from '../hooks/useModal.tsx' 

const Issue = () => {
  const issueBtns = [
    {
      adminLvl: 5,
      shortName: 'setLvl',
      name: 'Выдать уровень'
    },
    {
      adminLvl: 5,
      shortName: 'setCash',
      name: 'Выдать наличные'
    },
    {
      adminLvl: 5,
      shortName: 'setCardMoney',
      name: 'Выдать деньги на счёт'
    },
    {
      adminLvl: 5,
      shortName: 'setCryptoMoney',
      name: 'Выдать криптовалюту'
    },
    {
      adminLvl: 5,
      shortName: 'setLvlAcc',
      name: 'Выдать уровень аккаунта'
    },
    {
      adminLvl: 5,
      shortName: 'setAdminLvl',
      name: 'Выдать админ - уровень'
    },
    {
      adminLvl: 5,
      shortName: 'setHelperLvl',
      name: 'Выдать уровень хелперки'
    },
  ]

  const adminLvl = useSelector((state: RootState) => state.adminMenuReducer.adminLvl)
  const { handleModalOpen, ModalComponent } = useModal()

  const handleChangeData = (action: string, requiredAdminLvl: number) => {
    if (adminLvl >= requiredAdminLvl) {
      switch (action) {
        case 'setLvl':
          handleModalOpen('Выдать уровень', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Новый уровень' }], 'Выдать')
          break;
        case 'setCash':
          handleModalOpen('Выдать наличные', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Количество денег' }], 'Выдать деньги')
          break;
        case 'setCardMoney':
          handleModalOpen('Выдать деньги на счёт', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Количество денег' }], 'Выдать деньги')
          break;
        case 'setCryptoMoney':
          handleModalOpen('Выдать криптовалюту', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Количество криптовалюты' }], 'Выдать криптовалюту')
          break;
        case 'setLvlAcc':
          handleModalOpen('Выдать уровень аккаунта', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Новый уровень аккаунта ' }], 'Выдать')
          break;
        case 'setAdminLvl':
          handleModalOpen('Выдать админ - уровень', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Новый админ - уровень' }], 'Выдать')
          break;
        case 'setHelperLvl':
          handleModalOpen('Выдать уровень хелперки', `issue:${action}`, [{ name: 'ID игрока' }, { name: 'Новый уровень хелперки' }], 'Выдать')
          break;
        default: 
          return null
      }
    } else {
      return
    }
    
  }

  return(
    <>
      <div className="issue">
        <div className="header">
          <span className="name">Меню выдачи</span>
        </div>
        <ul className="bottom-block">
          { issueBtns.map((issue, index) => (
            <button className="btn" key={index} onClick={() => handleChangeData(issue.shortName, issue.adminLvl)}>{issue.name}</button>
          )) } 
        </ul>
      </div>
      { ModalComponent }
    </>
  )
}

export default Issue