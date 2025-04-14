export const interactionPlayerReducer = (state = { isVisible: false, inFraction: false, realtyStatus: false }, action: any) => {
  switch (action.type) {
    case 'SHOW_INTERACTION_PLAYER':
      return {
        isVisible: true,
        inFraction: action.inFraction,
        realtyStatus: action.realtyStatus
      }
    case 'HIDE_INTERACTION_PLAYER':
      return { isVisible: false }
    default:
      return state
  }
}