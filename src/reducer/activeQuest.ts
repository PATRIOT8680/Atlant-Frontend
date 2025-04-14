export const activeQuestReducer = (state = { nameQuest: 'Начальный квест', descriptionQuest: 'Добро пожаловать в штат. Отправляйтесь в мерию и получите своё гражданство', questDesc: 'На сервере действует акция, отыграй 10 часов и получи на выбор Mercedes 600, BMW I760 или Audi A6!' }, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE_QUEST':
      return {
        nameQuest: action.nameQuest,
        descriptionQuest: action.descriptionQuest,
        questDesc: action.questDesc
      }
    case 'GET_ACTIVE_QUEST':
      return state;
    default:
      return state;
  }
};