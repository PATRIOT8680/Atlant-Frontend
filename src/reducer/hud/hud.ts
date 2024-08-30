export const hudReducer = (state = true, action: any) => {
  switch (action.type) {
    case 'SHOW_HUD':
      return true;
    case 'HIDE_HUD':
      return false;
    default:
      return state;
  }
};