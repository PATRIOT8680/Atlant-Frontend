import { addCash, decrementCash } from "../actions/cash";

export const cashReducer = (state = 10000, action: any) => {
  switch (action.type) {
    case 'ADD_CASH':
      return state + action.payload;
    case 'DECREMENT_CASH':
      return state - action.payload;
    case 'GET_CASH':
      return state;
    default:
      return state;
  }
};