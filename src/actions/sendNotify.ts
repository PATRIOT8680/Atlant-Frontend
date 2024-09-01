export const sendNotify = (typeNotify: string, message: string, timer: number) => {
  return { type: 'SEND_NOTIFY', typeNotify, message, timer };
};