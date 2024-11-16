export const createCharReducer = (state = { isVisible: true, selectSlot: 'one' }, action: any) => {
  switch (action.type) {
    case 'SHOW_CREATE_CHAR':
      return {
        isVisible: true,
        selectSlot: action.selectSlot,
      }
    case 'HIDE_CREATE_CHAR':
      return { isVisible: false }
    default:
      return state
  }
}