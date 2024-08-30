export const setActiveQuest = (text: string) => {
  return { type: 'SET_ACTIVE_QUEST', payload: text };
};

export const getActiveQuest = () => {
  return { type: 'GET_ACTIVE_QUEST' };
};