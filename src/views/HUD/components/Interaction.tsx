import { useSelector } from 'react-redux'
import { RootState } from '../../../reducer/rootReducer'
import '../assets/styles/compiled-css/Interaction.css'

const Interaction = () => {
  const interactionActive = useSelector((state: RootState) => state.interactionActiveReducer)

  return(
    <>
      { interactionActive && (

        <div className="interaction">
          <span className="key">E</span>
          <span className="text-interaction">Взаимодействие</span>
        </div>

      ) }
      
    </>
  )
}

export default Interaction