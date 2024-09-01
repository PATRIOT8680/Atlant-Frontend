export const setActiveQuest = (nameQuest: string, descriptionQuest: string) => {
  return { type: 'SET_ACTIVE_QUEST', nameQuest, descriptionQuest };
};

export const getActiveQuest = () => {
  return { type: 'GET_ACTIVE_QUEST' };
};