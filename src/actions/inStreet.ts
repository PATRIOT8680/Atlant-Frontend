export const setStreet = (text: string) => {
  return { type: 'SET_STREET', payload: text };
};

export const getStreet = () => {
  return { type: 'GET_STREET' };
};