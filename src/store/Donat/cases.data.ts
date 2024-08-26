export interface IItem {
  shortName: string,
  fullName: string,
  type: 'Обычный' | 'Редкий' | 'Легендарный',
  price: number
}

export interface ICasesData {
  id: string,
  name: string,
  bottomName: string,
  price: number
  items: IItem[]
}

export const IChancec = {
  'Обычный': 60,
  'Редкий': 30,
  'Легендарный': 10
}

export const casesData: ICasesData[] = [
  {
    id: 'standart',
    name: 'Стандартный',
    bottomName: 'кейс',
    price: 200,
    items: [
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
    ]
  },
  {
    id: 'cars',
    name: 'Автомобильный',
    bottomName: 'кейс',
    price: 600,
    items: [
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'aston-martin',
        fullName: 'Aston Martin',
        type: 'Легендарный',
        price: 5000
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
    ]
  },
  {
    id: 'skins',
    name: 'Кейс',
    bottomName: 'со скинами',
    price: 700,
    items: [
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'aston-martin',
        fullName: 'Aston Martin',
        type: 'Легендарный',
        price: 5000
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
    ]
  },
  {
    id: 'clothes',
    name: 'Кейс',
    bottomName: 'с одеждой',
    price: 500,
    items: [
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'aston-martin',
        fullName: 'Aston Martin',
        type: 'Легендарный',
        price: 5000
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
      {
        shortName: 'ford-focus-5',
        fullName: 'Ford Focus 5',
        type: 'Редкий',
        price: 500
      },
      {
        shortName: 'adidas-neo',
        fullName: 'Adidas Neo',
        type: 'Обычный',
        price: 50
      },
      {
        shortName: 'burger',
        fullName: 'Бургер',
        type: 'Обычный',
        price: 10
      },
    ]
  },
]