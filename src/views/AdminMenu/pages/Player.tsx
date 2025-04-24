import { useState, useEffect } from 'react'
import './assets/styles/compiled-css/Player.css'

import { EventManager } from '../../../util/eventmanager.ts' 
import { useModal } from '../hooks/useModal.tsx'

import svg_list from './assets/img/Player/list.svg'

interface IPlayer {
  nickName: string,
  id: string,
  numberPhone: number,
  cash: string,
  bankMoney: string,
  fraction_role: string,
  family: string,
  house: string,
  apartment: string,
  business: string,
  warns: number,
  bans: number,
  socialClub: string,
  ip: string
}

const Player = () => {
  const examplePlayer: IPlayer =  {
    nickName: 'Patriot Adminov',
    id: '1436',
    numberPhone: 3209498395,
    cash: '$ 14 868 902',
    bankMoney: '$ 12 900',
    fraction_role: 'LSPD (Главный босс)',
    family: 'Patriot Family',
    house: '№1230',
    apartment: 'нет',
    business: 'Барбершоп №190',
    warns: 0,
    bans: 2,
    socialClub: 'Patriot',
    ip: '192.168.0.1'
  }

  const [player, setPlayer] = useState<string>('')
  const [foundPlayer, setFoundPlayer] = useState<IPlayer | null | 'no-found'>()
  const { handleModalOpen, ModalComponent } = useModal()

  const playerLabels: { [key in keyof IPlayer]: string } = {
    nickName: 'Никнейм',
    id: 'ID',
    numberPhone: 'Номер телефона',
    cash: 'Наличные',
    bankMoney: 'Деньги в банке',
    fraction_role: 'Фракция (звание)',
    family: 'Семья',
    house: 'Дом',
    apartment: 'Квартира',
    business: 'Бизнес',
    warns: 'Предупреждения',
    bans: 'Баны',
    socialClub: 'Social Club',
    ip: 'IP'
  }

  const actionBtn = {
    ban: 'Бан',
    mute: 'Мут',
    warn: 'Варн',
    jail: 'Тюрьма',
    kick: 'Кикнуть',
    punch: 'Ударить',
    ip_ban: 'IP бан',
    setLeader: 'Назначить лидером',
    spectate: 'Следить',
    me_tp: 'ТП к себе',
    tp_to: 'Телепортироваться'
  }

  const handleSearch = (player: string) => {
    setFoundPlayer(null)
    mp.trigger('client:adminMenu:searchPlayer', player)
  }

  useEffect(() => {
    const foundPlayer = (foundPlayer: IPlayer) => {
      setFoundPlayer(foundPlayer)
    }
    
    EventManager.addHandler('cef:adminMenu:foundPlayer', foundPlayer) 
    return () => EventManager.removeHandler('cef:adminMenu:foundPlayer', foundPlayer)
  }, [])

  let content
  if (foundPlayer === 'no-found') {
    content = (
      <span className="no-found">Данный игрок не найден!</span>
    )
  } else if (foundPlayer) {
    content = (
      <>
        <ul className="list-param">
          { Object.entries(foundPlayer).map(([key, value]) => (
            <li className="param" key={key}>
              <span className="param-name">{playerLabels[key as keyof IPlayer]}</span>
              <span className="param-value">{value}</span>
            </li>
          )) }
        </ul>
        <ul className="action-btns">
          { Object.entries(actionBtn).map(([key, value]) => (
            <li className="btn" key={key} onClick={() => handleActionBtn(key)}>{value}</li>
          )) }
        </ul>
        
      </>
      
      
    )
  } else {
    content = (
      <div className="emptyList-player">
        <img src={svg_list} />
        <span>Используйте поиск, чтобы<br/>найти игрока</span>
      </div>
    )
  }

  const handleActionBtn = (action: string) => {
    switch (action) {
      case 'ban':
        handleModalOpen('Бан', 'players:ban', [{ name: 'Причина бана' }, { name: 'Время бана' }], 'Выдать наказание')
        break;
      case 'mute':
        handleModalOpen('Мут', 'players:mute', [{ name: 'Причина мута' }, { name: 'Время мута' }], 'Выдать наказание')
        break;
      case 'warn':
        handleModalOpen('Предупреждение', 'players:warn', [{ name: 'Причина варна' }], 'Выдать наказание')
        break;
      case 'jail':
        handleModalOpen('Тюрьма', 'players:jail', [{ name: 'Причина наказания' }, { name: 'Время (минуты)' }], 'Выдать наказание')
        break;
      case 'kick':
        handleModalOpen('Кикнуть', 'players:kick', [{ name: 'Причина кика' }], 'Выдать наказание')
        break;
      case 'punch':
        return 'punch'
      case 'ip_ban':
        handleModalOpen('IP-бан', 'players:ip_ban', [{ name: 'Причина IP-бана' }, { name: 'Время (дни)' }], 'Выдать наказание')
        break;
      case 'setLeader':
        handleModalOpen('Выдать лидерку', 'players:setLeader', [{ name: 'Номер фракции' }], 'Выдать')
        break;
      case 'spectate':
        return 'spectate'
      case 'me_tp':
        return 'me_tp'
      case 'tp_to':
        return 'tp_to'
      default: 
        return null
    }
  }

  return(
    <>
      <div className="player">
        <div className="header">
          <span className="name">Игроки</span>
        </div>
        <div className="bottom-block">
          <div className="search-section">
            <input type="text" 
              placeholder='Введите никнейм или ID игрока...'
              value={player}
              onChange={(e) => setPlayer(e.target.value)}
            />
            <button className="btn-search" onClick={() => handleSearch(player)}>Найти</button>
          </div>
          
          {content}

          {/*{ foundPlayer !== null ? (foundPlayer.map((player) => (
            <div className="player">{player.nickName}</div>
          ))) : (
            <div className="emptyList-player">
              <img src={svg_list} />
              <span>Используйте поиск, чтобы найти игрока</span>
            </div>
          ) }*/}
        </div>
      </div>
      { ModalComponent }
    </>
  )
}

export default Player