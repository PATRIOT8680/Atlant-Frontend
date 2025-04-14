interface IHair {
	id: number
}

export interface IHairstyleData {
	male: IHair[]
	female: IHair[]
}

export const hairstyleData: IHairstyleData[] = [
	{
		male: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
    ],

    female: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
    ],
	},
]
