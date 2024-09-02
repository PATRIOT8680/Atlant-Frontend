export const petrolReducer = (state = { isVisible: true, petrolType: 'ron', vehName: 'camry', vehFuel: 20, maxFuelVeh: 120, typePetrolVeh: 'gas' }, action: any) => {
  switch (action.type) {
    case 'SHOW_PETROL':
      return {
        isVisible: true,
        petrolType: action.petrolType,
        vehName: action.vehName,
        vehFuel: action.vehFuel,
        maxFuelVeh: action.maxFuelVeh,
        typePetrolVeh: action.typePetrolVeh
      }
    case 'HIDE_PETROL':
      return { isVisible: false };
    default:
      return state;
  }
};