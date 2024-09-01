export const showPetrol = (petrolType: 'ltd' | 'ron' | 'xero', vehName: string, vehFuel: number, maxFuelVeh: number, typePetrolVeh: string) => {
  return { type: 'SHOW_PETROL', petrolType, vehName, vehFuel, maxFuelVeh, typePetrolVeh };
};

export const hidePetrol = () => {
  mp.trigger('client.close.petrol')
  return { type: 'HIDE_PETROL' };
};