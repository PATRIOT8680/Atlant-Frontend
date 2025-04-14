import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import { EventManager } from '../../../util/eventmanager.ts'
import '../assets/styles/compiled-css/Interaction.css'

const Interaction = () => {
  const interactionActive = useSelector((state: RootState) => state.interactionActiveReducer)

  const dispatch = useDispatch();

  const [currenKey, setCurrentKey] = useState<string>("E")

  useEffect(() => {
    const actionKey = (value: {type: string}) => {
      value.type === 'undefinde' ? dispatch({type: 'INTERACTION_DISABLE'}) : dispatch({type: 'INTERACTION_ENABLE'})
      setCurrentKey(value.type)
    }
    EventManager.addHandler('actionKey', actionKey);
    return () => EventManager.removeHandler( 'actionKey', actionKey );
  }, [])

  return(
    <>
      { interactionActive && (

        <div className="interaction">
          <span className="key">{currenKey}</span>
          <span className="text-interaction">Взаимодействие</span>
        </div>

      ) }
      
    </>
  )
}

export default Interaction