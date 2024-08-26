interface IQuestsData {
  id: string,
  name: string,
  description: string
}

export const questsData: IQuestsData[] = [
  {
    id: 'start-quest',
    name: 'Начальный квест',
    description: 'Добро пожаловать в штат. Отправляйтесь в мерию и получите своё гражданство'
  }
]