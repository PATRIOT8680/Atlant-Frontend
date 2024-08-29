import { createStore } from "redux";
import { cashReducer, addCash } from "../reducer/cash";

declare global {
  interface Window {
    App: StoreApi; // Добавляем тип StoreApi для App
  }
}

class StoreApi {
  constructor(private store: any) {}

  getReducerState(reducerName: string): any {
    return this.store.getState()[reducerName];
  }

  dispatchReducerAction(action: any): void {
    this.store.dispatch(action);
  }

  // Метод для создания прокси редьюсера
  createReducerProxy(reducerName: string, reducer: any, actions: any) {
    return new Proxy({}, {
      get: (target, property) => {
        if (property in actions) {
          return (...args: any[]) => {
            const action = actions[property](...args);
            this.dispatchReducerAction(action);
            return action;
          };
        } else if (property === 'state') {
          return this.getReducerState(reducerName);
        } else {
          return undefined;
        }
      }
    });
  }
}

export const store = createStore(cashReducer);
const storeApi = new StoreApi(store);

// Теперь мы передаем как редьюсер, так и действия
Object.assign(storeApi, { 
  cashReducer: storeApi.createReducerProxy('cashReducer', cashReducer, { addCash }) 
});

window.App = storeApi;