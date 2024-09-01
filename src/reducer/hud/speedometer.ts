export const speedometerReducer = (state = { inVeh: false, speed: 80, rpm: 3, actEngine: true, actLock: false, actSeatbelt: false, amountPetrol: 30, mileage: 1490 }, action: any) => {
  switch (action.type) {
    case 'SHOW_SPEEDOMETER':
      return {
        inVeh: true,
        speed: action.speed,
        rpm: action.rpm,
        actEngine: action.actEngine,
        actLock: action.actLock,
        actSeatbelt: action.actSeatbelt,
        amountPetrol: action.amountPetrol,
        mileage: action.mileage
      }
    case 'HIDE_SPEEDOMETER':
      return { inVeh: false };
    default:
      return state;
  }
};