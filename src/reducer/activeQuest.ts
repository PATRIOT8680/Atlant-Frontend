export const activeQuestReducer = (state = 'start-quest', action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUEST':
      return action.payload;
    case 'GET_ACTIVE_QUEST':
      return state;
    default:
      return state;
  }
};