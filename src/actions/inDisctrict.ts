export const setDistrict = (text: string) => {
  return { type: 'SET_DISTRICT', payload: text };
};

export const getDistrict = () => {
  return { type: 'GET_DISTRICT' };
};