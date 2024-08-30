export const setSpeed = (amount: number) => {
  return { type: 'SET_SPEED', payload: amount };
};

export const getSpeed = () => {
  return { type: 'GET_SPEED' };
};