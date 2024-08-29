import { useState, useRef, useEffect, useContext } from 'react'
import { useNotify } from '../../../components/Notify/NotificationProvider'
import '../assets/styles/compiled-css/Petrol.css'

import { vehiclesData } from '../../../configs/Petrol/vehicles.data'
import { selectPetrolData } from '../../../configs/Petrol/selectPetrol.data'
import { PetrolIndexContext } from '../Index'

import { ElipseBG } from './FilterBG'
import { FlashBG } from './FilterBG'

import Select_svg from '../assets/img/select.svg'

const Petrol = () => {
  const [selectedType, setSelectedType] = useState<string | null>(selectPetrolData[0].type)
  const [selectedVeh, setSelectedVeh] = useState<string | null>('camry')
  const [selectedAmount, setSelectedAmount] = useState<number>(10)
  const [selectedPay, setSelectedPay] = useState<string>('cash')
  const { selectedPetrolName, selectedPetrolShortName } = useContext(PetrolIndexContext)

  const sendNotify = useNotify()

  const sliderRef = useRef<HTMLInputElement>(null)
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10)
    setSelectedAmount(value)
  }

  const selectedVehData = vehiclesData.find(car => car.shortName === selectedVeh)
  const handleSelectType = (type: string) => {
    setSelectedType(type)
  }

  const getSelectedPrice = () => {
    const selectedPetrol = selectPetrolData.find((petrol) => {
      return petrol.type === selectedType
    })

    return selectedPetrol?.price || 0
  }

  const handleFullFuel = () => {
    setSelectedAmount(selectedVehData?.maxFuel || 0)
  }

  const totalPrice = getSelectedPrice() * selectedAmount

  const handleSelectPay = (type: string) => {
    setSelectedPay(type)
  }

  const handleSubmit = async () => {
    /* Отправка данных при нажатии на кнопку 'Заправить / зарядить' */
    //try {
    //  if (selectedType !== selectedVehData?.typePetrol) {
    //    return console.error(`Транспорт ${selectedVeh} не поддерживает заправку ${selectedType}`)
    //  }

    //  const response = await fetch('api/petrol', {
    //    method: 'POST',
    //    headers: { 'Content-Type': 'application/json' },
    //    body: JSON.stringify({
    //      selectedType,
    //      selectedAmount,
    //      totalPrice,
    //      selectedPay
    //    })
    //  })

    //  if (response.ok) {
    //    sendNotify({type: 'SUCCESS', message: 'Вы успешно заправились!', timer: 4000})
    //  } else {
    //    const errorData = await response.json()
    //    console.error(`Ошибка заправки / зарядки: ${errorData.error}`)
    //  }

    //} catch (error) {
    //  console.error(`Ошибка при отправке данных: ${error}`)
    //}
  }

  /* Получение имени транспорта */
  useEffect(() => {
    fetch('api/vehicles', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        const validVehicle = vehiclesData.find(
          (vehicle) => vehicle.shortName === data.shortName
        )

        if(validVehicle) {
          setSelectedVeh(validVehicle.shortName)
        } else {
          console.error(`Ошибка в получении имени транспорта ${data.shortName} с базы данных (shortName)`)
        }
      })
      .catch((error) => {
        console.error(`Ошибка при получении данных с сервера (api/vehicles): ${error}`)
      })

    fetch('api/petrol/price', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        const validVehicle = vehiclesData.find(
          (vehicle) => vehicle.shortName === data.shortName
        )

        if(validVehicle) {
          setSelectedVeh(validVehicle.shortName)
        } else {
          console.error(`Ошибка в получении имени транспорта ${data.shortName} с базы данных (shortName)`)
        }
      })
      .catch((error) => {
        console.error(`Ошибка при получении данных с сервера (api/vehicles): ${error}`)
      })
  }, [])

  return(
    <>
      <div className="petrol" id={selectedPetrolShortName}>
        <div className="blobs">
          <svg id='one' width="434" height="422" viewBox="0 0 434 422" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M228.6 0.290852C284.621 4.92463 309.167 69.7374 346.616 111.702C380.441 149.605 440.363 179.488 433.45 229.839C426.562 280.012 355.18 284.977 318.097 319.428C283.894 351.203 274.33 410.853 228.6 420.148C179.063 430.217 132.361 397.438 93.4966 365.082C49.725 328.64 0.87683 286.822 0.0113039 229.839C-0.860326 172.453 48.8482 131.066 89.3247 90.4197C129.897 49.6772 171.327 -4.44651 228.6 0.290852Z" />
          </svg>
          <svg id='two' width="434" height="422" viewBox="0 0 434 422" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M228.6 0.290852C284.621 4.92463 309.167 69.7374 346.616 111.702C380.441 149.605 440.363 179.488 433.45 229.839C426.562 280.012 355.18 284.977 318.097 319.428C283.894 351.203 274.33 410.853 228.6 420.148C179.063 430.217 132.361 397.438 93.4966 365.082C49.725 328.64 0.87683 286.822 0.0113039 229.839C-0.860326 172.453 48.8482 131.066 89.3247 90.4197C129.897 49.6772 171.327 -4.44651 228.6 0.290852Z" />
          </svg>
        </div>
        <div className="content-inside">
          <div className="header">
            <div className="logotype">
              <img src={`/src/views/Petrol/assets/img/Petrols/${selectedPetrolShortName}.png`} className="logo" />
              <span className="description">The best gas station in the state</span>
            </div>
            { selectedVeh && (
              <div className='car-info'>
                <img src={`/src/assets/img/vehicles/${selectedVehData?.shortName}.png`} className="car-img" />
                <div className="text">
                  <span className="car-name">{selectedVehData?.fullName}</span>
                  <div className="type-petrol">
                    <span className="info">Транспорт поддерживает:</span>
                    <span className="type" id={selectedVehData?.typePetrol}>{selectedVehData?.typePetrol}</span>
                  </div>
                </div>
              </div>
            ) }
          </div>

          <div className="select-petrol">
            {selectPetrolData.map((petrol, index) => (
              <div
                id={petrol.type} key={index} 
                className={`type ${selectedType === petrol.type ? 'selected' : ''}`}
                onClick={() => handleSelectType(petrol.type)}
              >
                <div className="bg-filter">
                  <div className="blur-elipse"></div>
                  { petrol.type === 'gas' || petrol.type === 'diesel' ? (
                      <ElipseBG />
                  ) : (
                      <FlashBG />
                  ) }
                </div>

                <div className="header">
                  <span className="price">${petrol.price} / {petrol.unit}</span>
                  <img src={Select_svg} className='select-svg' />
                </div>
                <span className="title">{petrol.type}</span>
                <div className="select-hover">
                  <span className="text">Выбрать</span>
                </div>
              </div>
            ))}
          </div>

          <div className="amount-petrol">
            <span className="title">Количество {selectedType === 'gas' || selectedType === 'diesel' ? 'топлива' : 'кватт'}</span>
            <div className="input-btn">
              <div className="select-amount">
                <div className="info">
                  <span className="liters">{selectedAmount} <span className='measurement'>{selectedType === 'gas' || selectedType === 'diesel' ? 'л.' : 'кВт.'}</span></span>
                  <span className="money">${totalPrice}</span>
                </div>
                <input 
                  className='range' type="range"
                  min={1} max={selectedVehData?.maxFuel}
                  ref={sliderRef}
                  value={selectedAmount}
                  onChange={handleAmountChange}
                />
              </div>
              <button className="full-fuel" onClick={handleFullFuel}>Полный бак</button>
            </div>
          </div>
          
          <div className="select-pay">
            <span className="title">Способ оплаты</span>
            <div className="btns">
              <button onClick={() => handleSelectPay('cash')} className={`btn ${selectedPay === 'cash' ? 'cash' : ''}`}>
                <svg width="18" height="12" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 1.82199C0 0.786597 0.894857 0 1.92857 0H16.0714C17.1051 0 18 0.786597 18 1.82199V10.178C18 11.2134 17.1051 12 16.0714 12H1.92857C0.894857 12 0 11.2134 0 10.178V1.82199ZM6.3 6C6.3 5.30016 6.58446 4.62899 7.09081 4.13413C7.59716 3.63927 8.28392 3.36126 9 3.36126C9.71608 3.36126 10.4028 3.63927 10.9092 4.13413C11.4155 4.62899 11.7 5.30016 11.7 6C11.7 6.69984 11.4155 7.37101 10.9092 7.86587C10.4028 8.36073 9.71608 8.63874 9 8.63874C8.28392 8.63874 7.59716 8.36073 7.09081 7.86587C6.58446 7.37101 6.3 6.69984 6.3 6ZM3.86229 6C3.86229 6.25061 3.76042 6.49095 3.5791 6.66816C3.39778 6.84537 3.15186 6.94492 2.89543 6.94492C2.639 6.94492 2.39308 6.84537 2.21176 6.66816C2.03044 6.49095 1.92857 6.25061 1.92857 6C1.92857 5.74939 2.03044 5.50905 2.21176 5.33184C2.39308 5.15463 2.639 5.05508 2.89543 5.05508C3.15186 5.05508 3.39778 5.15463 3.5791 5.33184C3.76042 5.50905 3.86229 5.74939 3.86229 6ZM15.1046 6.94492C15.361 6.94492 15.6069 6.84537 15.7882 6.66816C15.9696 6.49095 16.0714 6.25061 16.0714 6C16.0714 5.74939 15.9696 5.50905 15.7882 5.33184C15.6069 5.15463 15.361 5.05508 15.1046 5.05508C14.8481 5.05508 14.6022 5.15463 14.4209 5.33184C14.2396 5.50905 14.1377 5.74939 14.1377 6C14.1377 6.25061 14.2396 6.49095 14.4209 6.66816C14.6022 6.84537 14.8481 6.94492 15.1046 6.94492Z" />
                </svg>
                Наличные
              </button>
              <button onClick={() => handleSelectPay('card')} className={`btn ${selectedPay === 'card' ? 'card': ''}`}>
                <svg width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10.0909C0 10.5972 0.203188 11.0828 0.564866 11.4408C0.926543 11.7989 1.41708 12 1.92857 12H13.5C14.0115 12 14.502 11.7989 14.8637 11.4408C15.2254 11.0828 15.4286 10.5972 15.4286 10.0909V4.84091H0V10.0909ZM2.27296 7.5C2.27296 7.22876 2.38181 6.96862 2.57557 6.77682C2.76932 6.58502 3.03211 6.47727 3.30612 6.47727H4.95918C5.2332 6.47727 5.49599 6.58502 5.68974 6.77682C5.8835 6.96862 5.99235 7.22876 5.99235 7.5V8.18182C5.99235 8.45306 5.8835 8.7132 5.68974 8.905C5.49599 9.09679 5.2332 9.20455 4.95918 9.20455H3.30612C3.03211 9.20455 2.76932 9.09679 2.57557 8.905C2.38181 8.7132 2.27296 8.45306 2.27296 8.18182V7.5ZM13.5 0H1.92857C1.41708 0 0.926543 0.201136 0.564866 0.55916C0.203188 0.917184 0 1.40277 0 1.90909V2.79545H15.4286V1.90909C15.4286 1.40277 15.2254 0.917184 14.8637 0.55916C14.502 0.201136 14.0115 0 13.5 0Z" />
                </svg>
                Картой
              </button>
            </div>
          </div>

          <button className="pay-petrol" onClick={handleSubmit}>
            {selectedType === 'gas' || selectedType === 'diesel' ? 'Заправить' : 'Зарядить'} на ${totalPrice}
          </button>
          
        </div>
      </div>
    </>
  )
}

export default Petrol