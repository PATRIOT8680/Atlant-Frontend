import { createStore } from 'redux';
import { rootReducer, RootState } from "../reducer/rootReducer";

// interface
import { oneTwoSelectPerson, threeSelectPerson } from "../actions/selectPerson/selectPerson";
import { ICreateChar } from "../actions/createChar/createChar.ts";
import { IMsg } from '../views/AdminMenu/pages/Reports.tsx';

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
import { showSpeedometer, hideSpeedometer, setSpeed, setRpm, setPetrol, setMaxPetrol, setActEngine, setActLock, setActSeatbelt, setMileage } from "../actions/hud/speedometer";
import { showActiveWeapon, hideActiveWeapon } from "../actions/hud/weapon";
import { showPayday, hidePayday } from "../actions/hud/payday";
import { sendNotify } from "../actions/sendNotify";
import { interactionEnable, interactionDisable } from "../actions/hud/interaction";
import { setGender, getGender } from "../actions/gender.ts";
import { setReport, getReport } from '../actions/elements/adminMenu/report.ts';

// Interfaces
import { showHud, hideHud } from "../actions/hud/hud";
import { showPetrol, hidePetrol } from "../actions/petrol/petrol";
import { showDialog, hideDialog } from "../actions/dialog/dialog";
import { setRent } from '../actions/dialog/rent.ts';
import { showInteractionPlayer, hideInteractionPlayer } from "../actions/interactionPlayer/interactionPlayer";
import { showAuth, hideAuth } from "../actions/auth/auth";
import { showSelectPerson, hideSelectPerson } from "../actions/selectPerson/selectPerson";
import { showCreateChar, hideCreateChar } from "../actions/createChar/createChar.ts";
import { DialogPosition } from "../actions/dialog/dialog";
import { rentReducer } from '../reducer/dialog/rent.ts';
import { adminMenuReducer } from '../reducer/adminMenu/adminMenu.ts';
import { hideAdminMenu, showAdminMenu, setAdminNickname } from '../actions/menus/adminMenu.ts';

export const store = createStore(rootReducer); 

declare global {
  interface Window {
    App: any; // eslint-disable-line
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
    showSpeedometer: () => store.dispatch(showSpeedometer()),
    hideSpeedometer: () => store.dispatch(hideSpeedometer()),
    setSpeed: (amount: number) => store.dispatch(setSpeed(amount)),
    setRpm: (amount: number) => store.dispatch(setRpm(amount)),
    setPetrol: (amount: number) => store.dispatch(setPetrol(amount)),
    setMaxPetrol: (amount: number) => store.dispatch(setMaxPetrol(amount)),
    setActEngine: (active: boolean) => store.dispatch(setActEngine(active)),
    setActLock: (active: boolean) => store.dispatch(setActLock(active)),
    setActSeatbelt: (active: boolean) => store.dispatch(setActSeatbelt(active)),
    setMileage: (amount: number) => store.dispatch(setMileage(amount)),
  },
  activeWeaponReducer: {
    showActiveWeapon: (isVisible: boolean, hashWeapon: string, clipAmmo: number, allAmmo: number) => store.dispatch(showActiveWeapon(isVisible, hashWeapon, clipAmmo, allAmmo)),
    hideActiveWeapon: () => store.dispatch(hideActiveWeapon()),
  },
  paydayReducer: {
    showPayday: (playerLevel: number, playerExp: number) => store.dispatch(showPayday(playerLevel, playerExp)),
    hidePayday: () => store.dispatch(hidePayday()),
  },
  sendNotifyReducer: {
    sendNotify: (typeNotify: string, message: string, timer: number) => store.dispatch(sendNotify(typeNotify, message, timer)),
  },
  interactionActiveReducer: {
    interactionEnable: () => store.dispatch(interactionEnable()),
    interactionDisable: () => store.dispatch(interactionDisable()),
  },
  genderReducer: {
    setGender: (gender: 'male' | 'female') => store.dispatch(setGender(gender)),
    getGender: () => store.getState().genderReducer,
  },
  reportReducer: {
    setReport: (id: number, listMsg: IMsg[], status: 'waiting' | 'reviewed', responder: string | null) => store.dispatch(setReport(id, listMsg, status, responder)),
    getReport: () => store.getState().reportReducer,
  },

  // Interfaces
  hudReducer: {
    showHud: () => store.dispatch(showHud()),
    hideHud: () => store.dispatch(hideHud()),
  },
  petrolReducer: {
    showPetrol: (petrolType: 'ltd' | 'ron' | 'xero' | 'Global Oil', vehName: string, vehFuel: number, maxFuelVeh: number, typePetrolVeh: string) => store.dispatch(showPetrol(petrolType, vehName, vehFuel, maxFuelVeh, typePetrolVeh)),
    hidePetrol: () => store.dispatch(hidePetrol()),
  },
  dialogReducer: {
    showDialog: (npcName: string, npcStatus: string, dialogText: string, buttons: { text: string, id: string, onClick: () => void }[], position: DialogPosition, isVisibleRent: boolean) => store.dispatch(showDialog(npcName, npcStatus, dialogText, buttons, position, isVisibleRent)),
    hideDialog: () => store.dispatch(hideDialog())
  },
  rentReducer: {
   setRent : (hash: string, price: number, shop: number) => store.dispatch(setRent(hash, price, shop)),
  },
  interactionPlayerReducer: {
    showInteractionPlayer: (inFraction: boolean, realtyStatus: boolean) => store.dispatch(showInteractionPlayer(inFraction, realtyStatus)),
    hideInteractionPlayer: () => store.dispatch(hideInteractionPlayer())
  },
  authReducer: {
    showAuth: () => store.dispatch(showAuth()),
    hideAuth: () => store.dispatch(hideAuth()),
  },
  selectPersonReducer: {
    showSelectPerson: (
      onePerson: oneTwoSelectPerson,
      twoPerson: oneTwoSelectPerson,
      threePerson: threeSelectPerson,
    ) => store.dispatch(showSelectPerson(onePerson, twoPerson, threePerson)),
    hideSelectPerson: () => store.dispatch(hideSelectPerson()),
  },
  createCharacterReducer: {
    showCreateChar: (selecSlot: ICreateChar["selectSlot"]) => store.dispatch(showCreateChar(selecSlot)),
    hideCreateChar: () => store.dispatch(hideCreateChar())
  },
  adminMenuReducer: {
    showAdminMenu: (adminNickname: string, adminLvl: number) => store.dispatch(showAdminMenu(adminNickname, adminLvl)),
    setAdminNickname: (adminNickname: string) => store.dispatch(setAdminNickname(adminNickname)),
    hideAdminMenu: () => store.dispatch(hideAdminMenu())
  }
};