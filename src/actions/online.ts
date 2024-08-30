export const setOnline = (amount: number) => {
  return { type: 'SET_ONLINE', payload: amount };
};

export const getOnline = () => {
  return { type: 'GET_ONLINE' };
};