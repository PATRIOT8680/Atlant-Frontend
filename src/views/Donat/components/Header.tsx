import './assets/styles/compiled-css/Header.css'

import Acoins from './assets/img/Header/acoins.svg'
import Bag from './assets/img/Header/bag.svg'

const Header = () => {

  return(
    <>
      <div className="text-block">
        <span className="title">Donat Menu</span>
        <span className="description">В данном меню вы можете приобретать привелегии, транспорт и услуги за реальные деньги</span>
      </div>
      <div className="right-block">
        <span className="esc-key">ESC</span>
        <div className="important">
          <div className="coins">
            <span className="number">140</span>
            <img className='icon' src={Acoins} />
          </div>
          <button className='to-inventory'>
            <img src={Bag} />
            <span>Инвентарь</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Header