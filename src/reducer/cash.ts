export const cashReducer = (state = 5000, action: any) => {
  switch (action.type) {
    case 'SET_CASH':
      return action.payload;
    case 'GET_CASH':
      return state;
    default:
      return state;
  }
};