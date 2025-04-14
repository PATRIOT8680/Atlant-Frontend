import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import { Input } from "../components/elements/components/Input"
import { setGenState } from "../../../actions/createChar/char"

import './styles/LastTab.sass'

interface IShowLastTab {
	setLastTab: Dispatch<SetStateAction<boolean>>;
  }

const LastTab = ({ setLastTab }: IShowLastTab) => {

  const [showSelectRole, setShowSelectRole] = useState<number>(0)

  
      const info_player = [
        {
            text_recommend: 'Рекомендуем',
            player: {
                name: "Лос-Сантос",
                text: 'Иммигрируя из своей страны на самолете, вы добираетесь до Лос-Сантоса, где с самыми нужными вещами, что вы успели забрать с собой, вас ждёт работа, и достижения новых высот.'
            }
        },
        {
            text_recommend: '',
            player: {
                name: "Кайо-Перико",
                text: 'Прилетев на самолёте в Кайо-Перико, в опрятной одежде с первыми деньгами и телефоном, вам открыты все дороги для покорения этого мира!'
            }
        },
        {
            text_recommend: '',
            player: {
                name: "Сенди-Шорс",
                text: 'Очнувшись в окрестностях округа Блейн, в старой грязной одежде и без цента в кармане вам предстоит вернуться к нормальной жизни. Хорошо, что вы уже полноценный гражданин США, что облегчит ваш дальнейший путь.'
            }
        }
      ]

      const selectTabRole = ((id: number) => {
          setShowSelectRole(id)
        })

      const roleChoise = () =>{
        setLastTab(false)
        mp.trigger('client:events:custom:choiceRole', showSelectRole) // eslint-disable-line
      }

  return(
    <>
      <div className="lastTabWrapper">
        <div className="lastTabContainer">
            {/* <img src={ClothesSVG}/> */}
            <span  className="title">{info_player[0].text_recommend}</span>
            {
              info_player.map((item: any, id: number) => {
                return ( 
                <div key = {id} className={`nav-wrapper ${showSelectRole === id ? "select" : ""}`} onClick={() => selectTabRole(id)}>
                  <div className="text-block" >
                    <span  className="description">{item.player.name}</span>
                    <span  className="description">{item.player.text}</span>
                  </div>
                </div>
                )
              })
            }
        </div>
        <button className='btn-create-char' onClick={roleChoise}>Воплоти свою мечту !</button>
      </div>
    </>
  )
}

export default LastTab