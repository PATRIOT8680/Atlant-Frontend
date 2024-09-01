export const showSpeedometer = (speed: number, rpm: number, actEngine: boolean, actLock: boolean, actSeatbelt: boolean, amountPetrol: number, mileage: number) => {
  return { type: 'SHOW_SPEEDOMETER', speed, rpm, actEngine, actLock, actSeatbelt, amountPetrol, mileage };
};

export const hideSpeedometer = () => {
  return { type: 'HIDE_PETROL' };
};