export interface IItemsSet {
  name: string,
  value: string
}

export interface ICarCharacteristics {
  name: string,
  value: string
}

export interface ISetsData {
  nameVip: string,
  advantage: string,
  price: number,
  noPrice: number,
  car: {
    fullName: string,
    shortName: string,
    view: string,
    characteristics: ICarCharacteristics[]
  },
  itemsSet: IItemsSet[]
}

export const setsData: ISetsData[] = [
  {
    nameVip: 'Phoenix',
    advantage: '🔥 Выгодно!',
    price: 1500,
    noPrice: 2000,
    car: {
      fullName: 'Pfister Comet ST2',
      shortName: 'pfister-st2',
      view: 'Спорткар',
      characteristics: [
        { name: 'Скорость', value: 'до 200 км/ч' },
        { name: 'Багажник', value: '100 кг' },
      ]
    },
    itemsSet: [
      { name: 'Валюта', value: '150.000 $' },
      { name: 'EXP', value: '+ 150 EXP' },
      { name: 'Документы', value: 'Лицензии, паспорт и военник' },
      { name: 'HP после смерти', value: '80%' },
    ]
  },
  {
    nameVip: 'Maestro',
    advantage: '💸 Экономно!',
    price: 500,
    noPrice: 1500,
    car: {
      fullName: 'Baller Rover',
      shortName: 'baller',
      view: 'Внедорожник',
      characteristics: [
        { name: 'Скорость', value: 'до 150 км/ч' },
        { name: 'Багажник', value: '400 кг' },
      ]
    },
    itemsSet: [
      { name: 'Валюта', value: '70.000 $' },
      { name: 'EXP', value: '+ 70 EXP' },
      { name: 'Документы', value: 'Лицензии и паспорт' },
      { name: 'HP после смерти', value: '65%' },
    ]
  },
  {
    nameVip: 'Vanguard',
    advantage: '🌟 Элитно!',
    price: 3500,
    noPrice: 5000,
    car: {
      fullName: 'Aston Martin Valkyrie',
      shortName: 'aston-valkyrie',
      view: 'Эксклюзивный спорткар',
      characteristics: [
        { name: 'Скорость', value: 'до 400 км/ч' },
        { name: 'Багажник', value: '50 кг' },
      ]
    },
    itemsSet: [
      { name: 'Валюта', value: '500.000 $' },
      { name: 'EXP', value: '+ 300 EXP' },
      { name: 'Документы', value: 'Лицензии, паспорт и военник' },
      { name: 'HP после смерти', value: '100%' },
    ]
  },
]