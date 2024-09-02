export const interactionActiveReducer = (state = false, action: any) => {
  switch (action.type) {
    case 'INTERACTION_ENABLE':
      return true;
    case 'INTERACTION_DISABLE':
      return false;
    default:
      return state;
  }
};