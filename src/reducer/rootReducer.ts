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
import { speedReducer } from './speed';

// Interface Reducer
import { hudReducer } from '../reducer/hud/hud';
import { petrolReducer } from './petrol/petrol';

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
  speedReducer: ReturnType<typeof speedReducer>;

  // Interface
  hudReducer: ReturnType<typeof hudReducer>;
  petrolReducer: ReturnType<typeof petrolReducer>;
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
  speedReducer,

  // Interface
  hudReducer,
  petrolReducer
});