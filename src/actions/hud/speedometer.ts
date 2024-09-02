export const showSpeedometer = () => {
  return { type: 'SHOW_SPEEDOMETER' }
}

export const hideSpeedometer = () => {
  return { type: 'HIDE_SPEEDOMETER' }
}

export const setSpeed = (speed: number) => {
  return { type: 'SET_SPEED', payload: speed }
}

export const setRpm = (rpm: number) => {
  return { type: 'SET_RPM', payload: rpm }
}

export const setPetrol = (petrol: number) => {
  return { type: 'SET_PETROL', payload: petrol }
}

export const setMaxPetrol = (petrol: number) => {
  return { type: 'SET_MAX_PETROL', payload: petrol }
}

export const setActEngine = (actEngine: boolean) => {
  return { type: 'SET_ACTIVE_ENGINE', payload: actEngine }
}

export const setActLock = (actLock: boolean) => {
  return { type: 'SET_ACTIVE_LOCK', payload: actLock }
}

export const setActSeatbelt = (actSeatbelt: boolean) => {
  return { type: 'SET_ACTIVE_SEATBELT', payload: actSeatbelt }
}

export const setMileage = (mileage: number) => {
  return { type: 'SET_MILEAGE', payload: mileage }
}