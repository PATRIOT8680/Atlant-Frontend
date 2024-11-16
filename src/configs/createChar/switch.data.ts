interface ISwitch {
	id: number
  nameSwitch: string
}

export interface ISectionsSwitch {
  styleHair: ISwitch[]
	freckles: ISwitch[]
	diseasesSkin: ISwitch[]
}

export const switchData: ISectionsSwitch[] = [
	{
		styleHair: [
			{ id: 1, nameSwitch: 'Стиль прически #1' },
			{ id: 2, nameSwitch: 'Стиль прически #2' },
			{ id: 3, nameSwitch: 'Стиль прически #3' },
			{ id: 4, nameSwitch: 'Стиль прически #4' },
			{ id: 5, nameSwitch: 'Стиль прически #5' },
			{ id: 6, nameSwitch: 'Стиль прически #6' },
			{ id: 7, nameSwitch: 'Стиль прически #7' },
		],
		freckles: [
			{ id: 1, nameSwitch: 'Веснушки #1' },
			{ id: 2, nameSwitch: 'Веснушки #2' },
			{ id: 3, nameSwitch: 'Веснушки #3' },
			{ id: 4, nameSwitch: 'Веснушки #4' },
			{ id: 5, nameSwitch: 'Веснушки #5' },
			{ id: 6, nameSwitch: 'Веснушки #6' },
			{ id: 7, nameSwitch: 'Веснушки #7' },
		],
		diseasesSkin: [
			{ id: 1, nameSwitch: 'Заболевание #1' },
			{ id: 2, nameSwitch: 'Заболевание #2' },
			{ id: 3, nameSwitch: 'Заболевание #3' },
			{ id: 4, nameSwitch: 'Заболевание #4' },
			{ id: 5, nameSwitch: 'Заболевание #5' },
			{ id: 6, nameSwitch: 'Заболевание #6' },
			{ id: 7, nameSwitch: 'Заболевание #7' },
		],
	},
]