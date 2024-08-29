export interface ICashState {
  cash: number;
}

const defaultState = {
  cash: 10000,
};

type CashAction = {
  type: 'ADD_CASH';
  payload: number;
};

// Добавьте функцию addCash
export const addCash = (payload: number) => ({
  type: 'ADD_CASH',
  payload,
});

export const cashReducer = (
  state: ICashState = defaultState,
  action: CashAction
) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, cash: state.cash + action.payload };

    default:
      return state;
  }
};

export type RootState = ReturnType<typeof cashReducer>;