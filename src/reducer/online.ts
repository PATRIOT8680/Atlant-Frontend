export const onlineReducer = (state = 0, action: any) => {
  switch (action.type) {
    case 'SET_ONLINE':
      return action.payload;
    case 'GET_ONLINE':
      return state;
    default:
      return state;
  }
};