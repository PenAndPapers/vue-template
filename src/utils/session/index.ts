export const setSession = (key: string, payload: string) => {
  if (key && payload) sessionStorage.setItem(key, payload);
};

export const getSession = (key: string) => {
  if (key) return sessionStorage.getItem(key);
  return null;
};

export const removeSession = (key: string) => {
  if (key) sessionStorage.removeItem(key);
  return null;
};

export const clearSession = () => {
  sessionStorage.clear();
};
