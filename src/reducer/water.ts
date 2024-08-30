export const waterReducer = (state = 70, action: any) => {
  switch (action.type) {
    case 'SET_WATER':
      return action.payload;
    case 'GET_WATER':
      return state;
    default:
      return state;
  }
};