export const showActiveWeapon = (hashWeapon: string, clipAmmo: number, allAmmo: number) => {
  return { type: 'SHOW_WEAPON', hashWeapon, clipAmmo, allAmmo };
};

export const hideActiveWeapon = () => {
  return { type: 'HIDE_WEAPON' };
};