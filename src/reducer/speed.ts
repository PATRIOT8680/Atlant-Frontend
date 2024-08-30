export const speedReducer = (state = 25, action: any) => {
  switch (action.type) {
    case 'SET_SPEED':
      return action.payload;
    case 'GET_SPEED':
      return state;
    default:
      return state;
  }
};