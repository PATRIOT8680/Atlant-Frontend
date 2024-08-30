export const microphoneActive = (state = false, action: any) => {
  switch (action.type) {
    case 'MICROPHONE_ENABLE':
      return true;
    case 'MICROPHONE_DISABLE':
      return false;
    default:
      return state;
  }
};