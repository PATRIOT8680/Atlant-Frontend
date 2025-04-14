import { SET_GEN_STATE, SET_FACE_STATE } from "../../actions/createChar/char";
import { IChar } from "../../actions/createChar/char";

const initialState: IChar = {
  gen: {
    sex: 'male',
    valOne: 50,
    valTwo: 50,
    valName: '',
    valSurname: '',
    valAge: '',
    valPromo: '',
    valRefer: '',
    valNational: 'Абхаз',
    parents: { father: [], mother: [] },
    currentFatherIndex: 1,
    currentMotherIndex: 1,
  },
  face: {
    valHeightbrow: 50,
    valDepthbrow: 50,
    valHeightcheek: 50,
    valWidthcheek: 50,
    valDepthcheek: 50,
    valWidthjaw: 50,
    valShapejaw: 50,
    valHeightchin: 50,
    valWidthchin: 50,
    valDepthchin: 50,
    valIndentchin: 50,
    valGirthneck: 50,
    valWidthnose: 50,
    valHeightnose: 50,
    valLenghttip: 50,
    valHeighttip: 50,
    valDepthtip: 50,
    valBreakagenose: 50,
    valFoldseye: 50,
    valThicknesslips: 50,
  },
};

export const characterReducer = (state = initialState, action: any): IChar => {
/* console.log('Action received:', action);
console.log('Current state:', state); */
  switch (action.type) {
    case SET_GEN_STATE:
      return { ...state, gen: { ...state.gen, ...action.payload } };
    case SET_FACE_STATE:
      return { ...state, face: { ...state.face, ...action.payload } };
    default:
      return state;
  }
};