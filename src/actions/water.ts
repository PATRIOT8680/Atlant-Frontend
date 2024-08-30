export const setWater = (amount: number) => {
  return { type: 'SET_WATER', payload: amount };
};

export const getWater = () => {
  return { type: 'GET_WATER' };
};