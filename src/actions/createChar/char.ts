export const SET_GEN_STATE = 'SET_GEN_STATE';
export const SET_FACE_STATE = 'SET_FACE_STATE';

export interface IGen {
	sex: 'male' | 'female'
	valOne: number
	valTwo: number
	valName: string
	valSurname: string
	valAge: number | ''
	valPromo: string | ''
	valRefer: string | ''
	valNational: string
	parents: { father: any[]; mother: any[] }
	currentFatherIndex: number
	currentMotherIndex: number
}

export interface IFace {
	valHeightbrow: number
	valDepthbrow: number
	valHeightcheek: number
	valWidthcheek: number
	valDepthcheek: number
	valWidthjaw: number
	valShapejaw: number
	valHeightchin: number
	valWidthchin: number
	valDepthchin: number
	valIndentchin: number
	valGirthneck: number
	valWidthnose: number
	valHeightnose: number
	valLenghttip: number
	valHeighttip: number
	valDepthtip: number
	valBreakagenose: number
	valFoldseye: number
	valThicknesslips: number
}

export interface IChar {
	gen: IGen
	face: IFace
}

export const setGenState = (payload: Partial<IGen>) => ({
  type: SET_GEN_STATE,
  payload,
});

export const setFaceState = (payload: Partial<IFace>) => ({
	type: SET_FACE_STATE,
	payload,
})