export const setCash = (amount: number) => {
  return { type: 'SET_CASH', payload: amount };
};

export const getCash = () => {
  return { type: 'GET_CASH' };
};