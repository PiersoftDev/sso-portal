export const getStoredAuthToken = (tokenName) => localStorage.getItem(tokenName)

export const storeAuthToken = (tokenName, token) =>
  localStorage.setItem(tokenName, token)

export const removeStoredAuthToken = (tokenName) =>
  localStorage.removeItem(tokenName)
