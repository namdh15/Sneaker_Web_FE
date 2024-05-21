export const nameSpace = 'sneaker-web';

export const setLocalStorage = (key, value) => {
  localStorage.setItem(`${nameSpace}-${key}`, value);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(`${nameSpace}-${key}`);
};

export const removeLocalStorage = (key) => {
  return localStorage.removeItem(`${nameSpace}-${key}`);
};