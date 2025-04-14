export const setSid = (amount: string) => {
  return { type: 'SET_SID', payload: amount };
};

export const getSid = () => {
  return { type: 'GET_SID' };
};