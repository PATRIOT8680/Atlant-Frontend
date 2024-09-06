export const dialogReducer = (state = { isVisible: false, npcName: 'Brand Crason', npcStatus: 'Местный прораб', dialogText: 'Денек выдался ветреным. Верхушки деревьев изгибались в сто­рону дороги, точно кланялись отъезжающим. По зелени необъятных полей одна за другой непрерывно бежали волны. Тени облаков бежали наперегонки с золотистыми полосами солнечного света. А ветер все не утихал и вместе с ним летели и гнались друг за другом полосы света и теней', buttons: [ { text: 'До встречи!', id: 'one_btn', onClick: () => console.log('Кликнули на кнопку 1') }, { text: 'Я вас понял', id: 'two_btn', onClick: () => console.log('Кликнули на кнопку 2') }, { text: 'Извините, я передумал', id: 'two_btn', onClick: () => console.log('Кликнули на кнопку 2') }, { text: 'Другого пути нет', id: 'two_btn', onClick: () => console.log('Кликнули на кнопку 2') } ], position: 'BOTTOM_CENTER' }, action: any) => {
  switch (action.type) {
    case 'SHOW_DIALOG':
      return {
        isVisible: true,
        npcName: action.npcName,
        npcStatus: action.npcStatus,
        dialogText: action.dialogText,
        buttons: action.buttons,
        position: action.position
      }
    case 'HIDE_DIALOG':
      return { isVisible: false }
    default:
      return state
  }
}