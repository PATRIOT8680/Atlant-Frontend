export const addCash = (amount: number) => {
  return { type: 'ADD_CASH', payload: amount };
};

export const decrementCash = (amount: number) => {
  return { type: 'DECREMENT_CASH', payload: amount };
};

export const getCash = () => {
  return { type: 'GET_CASH' };
};