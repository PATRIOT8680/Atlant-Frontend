export const sendNotifyReducer = (state = { typeNotify: 'INFO', message: 'Test message', timer: 5000 }, action: any) => {
  switch (action.type) {
    case 'SEND_NOTIFY':
      return {
        typeNotify: action.typeNotify,
        message: action.message,
        timer: action.timer
      }
    default:
      return state;
  }
};