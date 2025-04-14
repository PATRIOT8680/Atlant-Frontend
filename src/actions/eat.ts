export const setEat = (amount: number) => {
  return { type: 'SET_EAT', payload: amount };
};

export const getEat = () => {
  return { type: 'GET_EAT' };
};