export const setZone = (text: 'safe' | 'danger') => {
  return { type: 'SET_ZONE', payload: text };
};

export const getZone = () => {
  return { type: 'GET_ZONE' };
};