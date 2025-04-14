type Gender = 'male' | 'female'

export const genderReducer = (state: Gender = 'male', action: any) => {
	switch (action.type) {
		case 'SET_GENDER':
			return action.payload
		case 'GET_GENDER':
			return state
		default:
			return state
	}
}
