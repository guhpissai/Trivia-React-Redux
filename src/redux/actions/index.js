export const NEW_QUESTIONS = 'NEW_QUESTIONS';
export const GET_LOGIN = 'GET_LOGIN';
export const ISDISABLED_BUTTON = 'ISDISABLED_BUTTON';
export const INDEX_QUESTION = 'INDEX_QUESTION';
export const QUESTION_SELECTED = 'QUESTION_SELECTED';
export const NEXT_TIMER = 'NEXT_TIMER';
export const PLAYER_SCORE = 'PLAYER_SCORE';

export const newQuestions = (payload) => ({
  type: NEW_QUESTIONS,
  payload,
});

export const getLogin = (login) => ({
  type: GET_LOGIN,
  payload: login,
});

export const disabledButton = (payload) => ({
  type: ISDISABLED_BUTTON,
  payload,
});

export const indexChange = (payload) => ({
  type: INDEX_QUESTION,
  payload,
});

export const questionSelected = () => ({
  type: QUESTION_SELECTED,
});

export const nextTimer = () => ({
  type: NEXT_TIMER,
});

export const playerScore = (payload) => ({
  type: PLAYER_SCORE,
  payload,
});
