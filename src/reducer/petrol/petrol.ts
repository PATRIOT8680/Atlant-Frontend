export const petrolReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'SHOW_PETROL':
      return true;
    case 'HIDE_PETROL':
      return false;
    default:
      return state;
  }
};