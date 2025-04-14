interface IEyebrows {
	id: number
}

export interface IEyebrowsData {
	male: IEyebrows[]
	female: IEyebrows[]
}

export const eyebrowsData: IEyebrowsData[] = [
	{
		male: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
			{ id: 7 },
		],

		female: [
			{ id: 1 },
			{ id: 2 },
			{ id: 3 },
			{ id: 4 },
			{ id: 5 },
			{ id: 6 },
		],
	},
]