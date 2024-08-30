export const inDistrictReducer = (state = 'Ричман', action: any) => {
  switch (action.type) {
    case 'SET_DISTRICT':
      return action.payload;
    case 'GET_DISTRICT':
      return state;
    default:
      return state;
  }
};