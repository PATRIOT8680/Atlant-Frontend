interface IPrivileges {
  name: string,
  value: string
}

interface IVipsData {
  fullName: string,
  shortName: string,
  price: number,
  privileges: IPrivileges[]
}

export const vipsData: IVipsData[] = [
  {
    fullName: 'Sapfire VIP',
    shortName: 'sapfire',
    price: 1500,
    privileges: [
      { name: 'Заработанная плата', value: 'X2.2' },
      { name: 'Пособие каждый час', value: '$3.000' },
      { name: 'Увольнение с фракции', value: '✓' },
      { name: 'Донат', value: 'X1.5' },
      { name: 'Налогооблажение', value: '✘' },
    ]
  },
  {
    fullName: 'Lazurit VIP',
    shortName: 'lazurit',
    price: 1000,
    privileges: [
      { name: 'Заработанная плата', value: 'X2' },
      { name: 'Пособие каждый час', value: '$2.000' },
      { name: 'Увольнение с фракции', value: '✓' },
      { name: 'Донат', value: 'X1.3' },
      { name: 'Налогооблажение', value: '✓' },
    ]
  },
  {
    fullName: 'Ametist VIP',
    shortName: 'ametist',
    price: 2000,
    privileges: [
      { name: 'Заработанная плата', value: 'X2.5' },
      { name: 'Пособие каждый час', value: '$5.000' },
      { name: 'Увольнение с фракции', value: '✓' },
      { name: 'Донат', value: 'X2' },
      { name: 'Налогооблажение', value: '✘' },
    ]
  }
]