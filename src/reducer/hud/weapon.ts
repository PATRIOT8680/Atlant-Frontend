export const activeWeaponReducer = (state = { hashWeapon: '0x2BE6766B', clipAmmo: 30, allAmmo: 150 }, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE_WEAPON':
      return {
        hashWeapon: action.hashWeapon,
        clipAmmo: action.clipAmmo,
        allAmmo: action.allAmmo
      }
    case 'GET_ACTIVE_WEAPON':
      return state;
    default:
      return state;
  }
};