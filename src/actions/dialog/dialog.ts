export enum DialogPosition {
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  BOTTOM_CENTER = 'BOTTOM_CENTER',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
}

export const showDialog = (npcName: string, npcStatus: string, dialogText: string, buttons: { text: string, id: string, onClick: () => void }[], position: DialogPosition) => {
  if (buttons.length < 1 || buttons.length > 4) {
    throw new Error('Количество кнопок должно быть от 1 до 4х!')
  }
  return { type: 'SHOW_DIALOG', npcName, npcStatus, dialogText, buttons, position }
}

export const hideDialog = () => {
  return { type: 'HIDE_DIALOG' }
}