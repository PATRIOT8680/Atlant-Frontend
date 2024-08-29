export interface ISelectPetrolData {
  type: string,
  price: number,
  unit: string
}

export const selectPetrolData: ISelectPetrolData[] = [
  {
    type: 'gas',
    price: 15,
    unit: 'литр'
  },
  {
    type: 'diesel',
    price: 20,
    unit: 'литр'
  },
  {
    type: 'electro',
    price: 5,
    unit: 'кватт'
  }
]