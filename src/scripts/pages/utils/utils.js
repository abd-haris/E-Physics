export const Utils = {
  setUserToken(key, value) {
    return sessionStorage.setItem(key, value);
  },

  getUserToken(key) {
    return sessionStorage.getItem(key);
  },

  destroyToken(key) {
    return sessionStorage.removeItem(key);
  },
};
