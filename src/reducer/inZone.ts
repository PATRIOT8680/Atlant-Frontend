export const inZoneReducer = (state = 'safe', action: any) => {
  switch (action.type) {
    case 'SET_ZONE':
      return action.payload;
    case 'GET_ZONE':
      return state;
    default:
      return state;
  }
};