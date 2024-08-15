import './assets/styles/compiled-css/Sets.css'
import { setsData } from "../../../store/Donat/sets.data"

import Acoins_green from './assets/img/Sets/acoins-green.svg'
import Acoins_white from './assets/img/Sets/acoins-white.svg'

const Sets = () => {
  return(
    <>
      <div className="sets">
        { setsData.map((set, index) => (

          <div className="set" id={set.nameVip} key={index}>
            <div className="content-inside">
              <div className="header-set">
                <div className="main-titles">
                  <div className="title">
                    <span className="name-vip">{set.nameVip}</span>
                    <span className="bottom-title">набор</span>
                  </div>
                  <span className="advantage">{set.advantage}</span>
                </div>
                <div className="price-title">
                  <span className="main-price">
                    {set.price}
                    <img src={Acoins_green} />
                  </span>
                  <span className="no-price">
                    {set.noPrice}
                    <img src={Acoins_white} />
                  </span>
                </div>
              </div>
              <ul className="list-items">
                <li className="car-block">
                  <div className="left-content">
                    <span className="name-car">{set.car.fullName}</span>
                    <span className="type-car">{set.car.view}</span>
                    <ul className="characteristics">
                      { set.car.characteristics.map((characteristic) => (
                        <li key={characteristic.name}>
                          {characteristic.name}: {characteristic.value}
                        </li>
                      )) }
                    </ul>
                  </div>
                  <img className='car-img' src={`src/assets/img/donat/vehicles.sets/${set.car.shortName}.png`} />
                </li>
                { set.itemsSet.map((item, index) => (
                  <li className="item" key={index}>
                    <span className="name">{item.name}</span>
                    <span className="value">{item.value}</span>
                  </li>
                )) }
              </ul>
              <button className="buy-set">
                <span className="text">Приобрести за </span>
                <span className="price">{set.price} AC</span>
              </button>
            </div>
          </div>

        )) }
      </div>
    </>
  )
}

export default Sets