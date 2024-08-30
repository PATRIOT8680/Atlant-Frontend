export const eatReducer = (state = 50, action: any) => {
  switch (action.type) {
    case 'SET_EAT':
      return action.payload;
    case 'GET_EAT':
      return state;
    default:
      return state;
  }
};