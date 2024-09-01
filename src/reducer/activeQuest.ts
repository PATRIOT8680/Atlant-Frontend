export const activeQuestReducer = (state = { nameQuest: 'Начальный квест', descriptionQuest: 'Добро пожаловать в штат. Отправляйтесь в мерию и получите своё гражданство' }, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUEST':
      return {
        nameQuest: action.nameQuest,
        descriptionQuest: action.descriptionQuest
      }
    case 'GET_ACTIVE_QUEST':
      return state;
    default:
      return state;
  }
};