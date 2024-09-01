import { createStore } from "redux";
import { rootReducer } from "../reducer/rootReducer";

// Components
import { setCash, getCash } from "../actions/cash";
import { setDistrict, getDistrict } from "../actions/inDisctrict";
import { setStreet, getStreet } from "../actions/inStreet";
import { microphoneEnable, microphoneDisable } from "../actions/microphone";
import { setZone, getZone } from "../actions/inZone";
import { setEat, getEat } from "../actions/eat";
import { setWater, getWater } from "../actions/water";
import { setOnline, getOnline } from "../actions/online";
import { setSid, getSid } from "../actions/sid";
import { setActiveQuest, getActiveQuest } from "../actions/activeQuest";
import { showSpeedometer, hideSpeedometer } from "../actions/hud/speedometer";
import { showActiveWeapon, hideActiveWeapon } from "../actions/hud/weapon";
import { showPayday, hidePayday } from "../actions/hud/payday";
import { sendNotify } from "../actions/sendNotify";

// Interfaces
import { showHud, hideHud } from "../actions/hud/hud";
import { showPetrol, hidePetrol } from "../actions/petrol/petrol";

export const store = createStore(rootReducer);

declare global {
  interface Window {
    App: any;
  }
}

window.App = {
  // Components
  cashReducer: {
    setCash: (amount: number) => store.dispatch(setCash(amount)),
    getCash: () => store.getState().cashReducer,
  },
  inZoneReducer: {
    setZone: (text: 'safe' | 'danger') => store.dispatch(setZone(text)),
    getZone: () => store.getState().inZoneReducer,
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
    setActiveQuest: (nameQuest: string, descriptionQuest: string) => store.dispatch(setActiveQuest(nameQuest, descriptionQuest)),
    getActiveQuest: () => store.getState().activeQuestReducer
  },
  speedometerReducer: {
    showSpeedometer: (speed: number, rpm: number, actEngine: boolean, actLock: boolean, actSeatbelt: boolean, amountPetrol: number, mileage: number) => store.dispatch(showSpeedometer(speed, rpm, actEngine, actLock, actSeatbelt, amountPetrol, mileage)),
    hideSpeedometer: () => store.dispatch(hideSpeedometer()),
  },
  activeWeaponReducer: {
    showActiveWeapon: (hashWeapon: string, clipAmmo: number, allAmmo: number) => store.dispatch(showActiveWeapon(hashWeapon, clipAmmo, allAmmo)),
    hideActiveWeapon: () => store.dispatch(hideActiveWeapon()),
  },
  paydayReducer: {
    showPayday: (playerLevel: number, playerExp: number) => store.dispatch(showPayday(playerLevel, playerExp)),
    hidePayday: () => store.dispatch(hidePayday()),
  },
  sendNotifyReducer: {
    sendNotify: (typeNotify: string, message: string, timer: number) => store.dispatch(sendNotify(typeNotify, message, timer)),
  },

  // Interfaces
  hudReducer: {
    showHud: () => store.dispatch(showHud()),
    hideHud: () => store.dispatch(hideHud()),
  },
  petrolReducer: {
    showPetrol: (petrolType: 'ltd' | 'ron' | 'xero', vehName: string, vehFuel: number, maxFuelVeh: number, typePetrolVeh: string) => store.dispatch(showPetrol(petrolType, vehName, vehFuel, maxFuelVeh, typePetrolVeh)),
    hidePetrol: () => store.dispatch(hidePetrol()),
  },
};