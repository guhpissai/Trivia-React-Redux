export const SET_LOCAL_STORAGE = (token) => {
  localStorage.setItem('token', (token));
};

export const GET_LOCAL_STORAGE = () => {
  localStorage.getItem(JSON.parse('token'));
};
