export const interactionPlayerReducer = (state = { isVisible: true, inFraction: true, realtyStatus: true }, action: any) => {
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