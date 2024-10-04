import { combineReducers } from 'redux';

// Components Reducer
import { cashReducer } from '../reducer/cash';
import { inDistrictReducer } from './inDistrict';
import { inStreetReducer } from './inStreet';
import { inZoneReducer } from './inZone';
import { microphoneActive } from './microphone';
import { eatReducer } from './eat';
import { waterReducer } from './water';
import { onlineReducer } from './online';
import { sidReducer } from './sid';
import { activeQuestReducer } from './activeQuest';
import { speedometerReducer } from './hud/speedometer';
import { activeWeaponReducer } from './hud/weapon';
import { paydayReducer } from './hud/payday';
import { sendNotifyReducer } from './sendNotify';
import { interactionActiveReducer } from './hud/interaction';

// Interface Reducer
import { hudReducer } from '../reducer/hud/hud';
import { petrolReducer } from './petrol/petrol';
import { dialogReducer } from './dialog/dialog';
import { interactionPlayerReducer } from './interactionPlayer/interactionPlayer';
import { authReducer } from './auth/auth';
import { selectPersonReducer } from './selectPerson/selectPerson';
import {createCharReducer} from "./createChar/createChar.ts";

export type RootState = {
  // Components
  cashReducer: ReturnType<typeof cashReducer>;
  inDistrictReducer: ReturnType<typeof inDistrictReducer>;
  inStreetReducer: ReturnType<typeof inStreetReducer>;
  inZoneReducer: ReturnType<typeof inZoneReducer>;
  microphoneActive: ReturnType<typeof microphoneActive>;
  eatReducer: ReturnType<typeof eatReducer>;
  waterReducer: ReturnType<typeof waterReducer>;
  onlineReducer: ReturnType<typeof onlineReducer>;
  sidReducer: ReturnType<typeof sidReducer>;
  activeQuestReducer: ReturnType<typeof activeQuestReducer>;
  speedometerReducer: ReturnType<typeof speedometerReducer>;
  activeWeaponReducer: ReturnType<typeof activeWeaponReducer>;
  paydayReducer: ReturnType<typeof paydayReducer>
  sendNotifyReducer: ReturnType<typeof sendNotifyReducer>
  interactionActiveReducer: ReturnType<typeof interactionActiveReducer>

  // Interface
  hudReducer: ReturnType<typeof hudReducer>;
  petrolReducer: ReturnType<typeof petrolReducer>;
  dialogReducer: ReturnType<typeof dialogReducer>;
  interactionPlayerReducer: ReturnType<typeof interactionPlayerReducer>;
  authReducer: ReturnType<typeof authReducer>;
  selectPersonReducer: ReturnType<typeof selectPersonReducer>
  createCharReducer: ReturnType<typeof createCharReducer>;
};

export const rootReducer = combineReducers({
  // Components
  cashReducer,
  inDistrictReducer,
  inStreetReducer,
  inZoneReducer,
  microphoneActive,
  eatReducer,
  waterReducer,
  onlineReducer,
  sidReducer,
  activeQuestReducer,
  speedometerReducer,
  activeWeaponReducer,
  paydayReducer,
  sendNotifyReducer,
  interactionActiveReducer,

  // Interface
  hudReducer,
  petrolReducer,
  dialogReducer,
  interactionPlayerReducer,
  authReducer,
  selectPersonReducer,
  createCharReducer
});