export const setRent = (hash: string, price: number, shop: number) => {
  return { type: 'SET_RENT', hash, price, shop}
}