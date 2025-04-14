export const sidReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_SID':
      return action.payload !== undefined ? action.payload : state;
    case 'GET_SID':
      return state;
    default:
      return state;
  }
};