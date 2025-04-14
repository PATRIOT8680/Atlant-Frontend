interface IShoes {
	id: number
}

export interface IClothesShoes {
	male: IShoes[]
	female: IShoes[]
}

export const clothesShoesData: IClothesShoes[] = [
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
