export interface ICreateChar {
  selectSlot: string
}

export const showCreateChar = (selectSlot: ICreateChar["selectSlot"]) => {
  return { type: 'SHOW_CREATE_CHAR', selectSlot};
};

export const hideCreateChar = () => {
  return { type: 'HIDE_CREATE_CHAR'};
};