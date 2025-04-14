export interface ISpeedometer {
  isVisible: boolean,
  speed: number,
  rpm: number,
  petrol: number,
  maxPetrol: number,
  actEngine: boolean,
  actLock: boolean,
  actSeatbelt: boolean,
  mileage: number
}

const initialState: ISpeedometer = {
  isVisible: false,
  speed: 202,
  rpm: 100,
  petrol: 100,
  maxPetrol: 150,
  actEngine: true,
  actLock: false,
  actSeatbelt: false,
  mileage: 1490
}

export const speedometerReducer = (state: ISpeedometer = initialState, action: any): ISpeedometer => {
  switch (action.type) {
    case 'SHOW_SPEEDOMETER':
      console.log(JSON.stringify(state))
      return { ...state, isVisible: true }
    case 'HIDE_SPEEDOMETER':
      return { ...state, isVisible: false }
    case 'SET_SPEED':
      return { ...state, speed: action.payload }
    case 'SET_RPM':
      return { ...state, rpm: action.payload }
    case 'SET_PETROL':
      return { ...state, petrol: action.payload }
    case 'SET_MAX_PETROL':
      return { ...state, maxPetrol: action.payload }
    case 'SET_ACTIVE_ENGINE':
      return { ...state, actEngine: action.payload }
    case 'SET_ACTIVE_LOCK':
      return { ...state, actLock: action.payload }
    case 'SET_ACTIVE_SEATBELT':
      return { ...state, actSeatbelt: action.payload }
    case 'SET_MILEAGE':
      return { ...state, mileage: action.payload }
    default:
      return state
  }
}