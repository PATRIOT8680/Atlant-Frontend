export const showInteractionPlayer = (inFraction: boolean, realtyStatus: boolean) => {
  return { type: 'SHOW_INTERACTION_PLAYER', inFraction, realtyStatus }
}

export const hideInteractionPlayer = () => {
  return { type: 'HIDE_INTERACTION_PLAYER' }
}