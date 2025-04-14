export const showAdminMenu = (adminNickname: string, adminLvl: number) => {
  return { 
    type: 'SHOW_ADMIN_MENU',
    adminNickname,
    adminLvl
  }
}

export const setAdminNickname = (adminNickname: string) => {
  return {
    type: 'SET_ADMIN_NICKNAME',
    payload: adminNickname
  };
};

export const hideAdminMenu = () => {
  return { type: 'HIDE_ADMIN_MENU' }
}