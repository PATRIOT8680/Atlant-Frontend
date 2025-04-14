export interface IVehiclesData {
  fullName: string,
  shortName: string,
  typePetrol: string,
  maxFuel: number
}

export const vehiclesData: IVehiclesData[] = [
  {
    fullName: 'Shelby Mustang',
    shortName: 'shelby_m',
    typePetrol: 'gas',
    maxFuel: 120
  },
  {
    fullName: 'Toyota Camry',
    shortName: 'camry',
    typePetrol: 'gas',
    maxFuel: 110
  },
  {
    fullName: 'Dodge RAM 1500',
    shortName: 'dodge_ram',
    typePetrol: 'diesel',
    maxFuel: 210
  },
  {
    fullName: 'Atom 2023',
    shortName: 'atom',
    typePetrol: 'electro',
    maxFuel: 100
  },
  {
    fullName: 'Dodge Challenger 75',
    shortName: 'Dukes',
    typePetrol: 'gas',
    maxFuel: 72
  },
]