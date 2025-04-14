export const adminMenuReducer = (state = { isVisible: true, adminNickname: 'Brand Crason', adminLvl: 7 },  action: any) => {
  switch (action.type) {
    case 'SHOW_ADMIN_MENU':
      return {
        isVisible: true,
        adminNickname: action.adminNickname,
        adminLvl: action.adminLvl
      }

    case 'SET_ADMIN_NICKNAME':
      return {
        ...state,
        adminNickname: action.payload,
      };
    case 'HIDE_ADMIN_MENU':
      return { isVisible: false }
    default:
      return state
  }
}