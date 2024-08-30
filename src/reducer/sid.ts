export const sidReducer = (state = '3H20P', action: any) => {
  switch (action.type) {
    case 'SET_SID':
      return action.payload;
    case 'GET_SID':
      return state;
    default:
      return state;
  }
};