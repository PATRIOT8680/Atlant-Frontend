interface ITop {
	id: number
}

export interface IClothesTop {
	male: ITop[]
	female: ITop[]
}

export const clothesTopData: IClothesTop[] = [
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
