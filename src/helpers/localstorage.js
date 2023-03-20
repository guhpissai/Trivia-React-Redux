export const SET_LOCAL_STORAGE = (key, value) => {
  if (typeof value !== 'string') {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, (value));
  }
};

export const GET_LOCAL_STORAGE = () => {
  localStorage.getItem(JSON.parse('token'));
};
