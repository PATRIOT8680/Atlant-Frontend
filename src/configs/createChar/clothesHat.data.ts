interface IHat {
	id: number
}

export interface IClothesHat {
	male: IHat[]
	female: IHat[]
}

export const clothesHatData: IClothesHat[] = [
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
