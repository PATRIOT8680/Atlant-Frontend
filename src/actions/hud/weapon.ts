export const showActiveWeapon = (isVisible: boolean, hashWeapon: string, clipAmmo: number, allAmmo: number) => {
  return { type: 'SHOW_WEAPON', isVisible, hashWeapon, clipAmmo, allAmmo };
};

export const hideActiveWeapon = () => {
  return { type: 'HIDE_WEAPON' };
};