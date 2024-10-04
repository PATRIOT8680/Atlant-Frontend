export const selectPersonReducer = (state = {
  isVisible: false,
  onePerson: {
    rp_name: '',
    lvl: 40,
    status: 'Гражданин',
    cash: 2000000,
    bank: 56967,
    fraction: 'Правительство'
  },
  twoPerson: {
    rp_name: 'Klycha Herova',
    lvl: 40,
    status: 'Администратор',
    cash: 2000000,
    bank: 56967,
    fraction: 'Правительство'
  },
  threePerson: {
    activeDonate: false,
    rp_name: '',
    lvl: 40,
    status: 'Администратор',
    cash: 2000000,
    bank: 56967,
    fraction: 'Правительство'
  },
 }, action: any) => {
  switch (action.type) {
    case 'SHOW_SELECT_PERSON':
      return {
        isVisible: true,
        onePerson: action.onePerson,
        twoPerson: action.twoPerson,
        threePerson: action.threePerson
      }
    case 'HIDE_SELECT_PERSON':
      return { isVisible: false };
    default:
      return state;
  }
};