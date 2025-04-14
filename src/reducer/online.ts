export const onlineReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'SET_ONLINE':
      return action.payload !== undefined ? action.payload : state;
    case 'GET_ONLINE':
      return state;
    default:
      return state;
  }
};