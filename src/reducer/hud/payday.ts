export const paydayReducer = (state = { active: true, playerLevel: 34, playerExp: 82 }, action: any) => {
  switch (action.type) {
    case 'SET_PAYDAY':
      return {
        active: true,
        playerLevel: action.playerLevel,
        playerExp: action.playerExp
      }
    case 'GET_PAYDAY':
      return state;
    default:
      return state;
  }
};