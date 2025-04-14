export const showPayday = (playerLevel: number, playerExp: number) => {
  return { type: 'SHOW_PAYDAY', playerLevel, playerExp };
};

export const hidePayday = () => {
  return { type: 'HIDE_PAYDAY' };
};