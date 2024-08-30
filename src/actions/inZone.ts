export const setZone = (text: string) => {
  return { type: 'SET_ZONE', payload: text };
};

export const getZone = () => {
  return { type: 'GET_ZONE' };
};