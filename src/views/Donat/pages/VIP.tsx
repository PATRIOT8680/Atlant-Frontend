import './assets/styles/compiled-css/VIP.css'
import { vipsData } from "../../../store/Donat/vips.data"

import Acoins_green from './assets/img/VIP/acoins-green.svg'

const VIP = () => {
  return(
    <>
      <div className="vips">
        { vipsData.map((vip, index) => (

          <div className="vip" id={vip.shortName} key={index}>
            <img 
              className='person-img'
              src={`src/assets/img/donat/vip.persons/${vip.shortName}.png`}
            />
            <div className="content-inside">
              <div className="header-title">
                <span className="name-vip">{vip.fullName}</span>
                <span className="price">
                  {vip.price}
                  <img className="acoins" src={Acoins_green}/>
                </span>
              </div>
              <div className="privileges">
                <span className="title">Привелегии</span>
                <ul className="list-privileges">
                  { vip.privileges.map((privilege, index) => (

                    <li className="privilege" key={index}>
                      <span className="name">{privilege.name}</span>
                      <span className="value">{privilege.value}</span>
                    </li>

                  )) }
                </ul>
              </div>
              <button className="buy-vip">Приобрести за {vip.price} AC</button>
            </div>
          </div>

        )) }
      </div>
    </>
  )
}

export default VIP