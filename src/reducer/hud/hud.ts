export const hudReducer = (state = { isVisible: true }, action: any) => {
  switch (action.type) {
    case 'SHOW_HUD':
      return { isVisible: true };
    case 'HIDE_HUD':
      return { isVisible: false };
    default:
      return state;
  }
};