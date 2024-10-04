export interface oneTwoSelectPerson {
  rp_name: string,
  lvl: number,
  status: 'Гражданин' | 'Администратор',
  cash: number,
  bank: number,
  fraction: string
}

export interface threeSelectPerson {
  activeDonate: boolean,
  rp_name: string,
  lvl: number,
  status: 'Гражданин' | 'Администратор',
  cash: number,
  bank: number,
  fraction: string
}

export const showSelectPerson = (onePerson: oneTwoSelectPerson[], twoPerson: oneTwoSelectPerson[], threePerson: threeSelectPerson[]) => {
  return { type: 'SHOW_SELECT_PERSON', onePerson, twoPerson, threePerson};
};

export const hideSelectPerson = () => {
  return { type: 'HIDE_SELECT_PERSON'};
};