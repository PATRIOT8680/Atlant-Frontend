export const setGender = (gender: 'male' | 'female') => {
	return { type: 'SET_GENDER', payload: gender }
}

export const getGender = () => {
	return { type: 'GET_GENDER' }
}