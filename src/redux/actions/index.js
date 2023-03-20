export const NEW_QUESTIONS = 'NEW_QUESTIONS';
export const GET_LOGIN = 'GET_LOGIN';

export const newQuestions = (payload) => ({
  type: NEW_QUESTIONS,
  payload,
});

export const getLogin = (login) => ({
  type: GET_LOGIN,
  payload: login,
});
