export const rentReducer = (state = {hash: 'Cruiser', price: 300, shop: 18 },  action: any) => {
  switch (action.type) {
    case 'SET_RENT':
      return {
        hash: action.hash,
        price: action.price,
        shop: action.shop
      }
    default:
      return state
  }
}