export const inStreetReducer = (state = 'Норт-Рокфорд-Драйв', action: any) => {
  switch (action.type) {
    case 'SET_STREET':
      return action.payload;
    case 'GET_STREET':
      return state;
    default:
      return state;
  }
};