import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

// Components
import { addCash, decrementCash } from "../actions/cash";
import { setDistrict, getDistrict } from "../actions/inDisctrict";
import { setStreet, getStreet } from "../actions/inStreet";
import { microphoneEnable, microphoneDisable } from "../actions/microphone";
import { setEat, getEat } from "../actions/eat";
import { setWater, getWater } from "../actions/water";
import { setOnline, getOnline } from "../actions/online";
import { setSid, getSid } from "../actions/sid";
import { setActiveQuest, getActiveQuest } from "../actions/activeQuest";
import { setSpeed, getSpeed } from "../actions/speed";

// Interfaces
import { showHud, hideHud } from "../actions/hud";
import { showPetrol, hidePetrol } from "../actions/petrol";

export const store = createStore(rootReducer);

declare global {
  interface Window {
    App: any;
  }
}

window.App = {
  // Components
  cashReducer: {
    addCash: (amount: number) => store.dispatch(addCash(amount)),
    decrementCash: (amount: number) => store.dispatch(decrementCash(amount)),
    getCash: () => store.getState().cashReducer,
  },
  inDistrictReducer: {
    setDistrict: (text: string) => store.dispatch(setDistrict(text)),
    getDistrict: () => store.getState().inDistrictReducer,
  },
  inStreetReducer: {
    setStreet: (text: string) => store.dispatch(setStreet(text)),
    getStreet: () => store.getState().inStreetReducer
  },
  microphoneActive: {
    microphoneEnable: () => store.dispatch(microphoneEnable()),
    microphoneDisable: () => store.dispatch(microphoneDisable()),
  },
  eatReducer: {
    setEat: (amount: number) => store.dispatch(setEat(amount)),
    getEat: () => store.getState().eatReducer
  },
  waterReducer: {
    setWater: (amount: number) => store.dispatch(setWater(amount)),
    getWater: () => store.getState().waterReducer
  },
  onlineReducer: {
    setOnline: (amount: number) => store.dispatch(setOnline(amount)),
    getOnline: () => store.getState().onlineReducer
  },
  sidReducer: {
    setSid: (amount: string) => store.dispatch(setSid(amount)),
    getSid: () => store.getState().sidReducer
  },
  activeQuestReducer: {
    setActiveQuest: (text: string) => store.dispatch(setActiveQuest(text)),
    getActiveQuest: () => store.getState().activeQuestReducer
  },
  speedReducer: {
    setSpeed: (amount: number) => store.dispatch(setSpeed(amount)),
    getSpeed: () => store.getState().speedReducer
  },

  // Interfaces
  hudReducer: {
    showHud: () => store.dispatch(showHud()),
    hideHud: () => store.dispatch(hideHud()),
  },
  petrolReducer: {
    showPetrol: () => store.dispatch(showPetrol()),
    hidePetrol: () => store.dispatch(hidePetrol()),
  },
};