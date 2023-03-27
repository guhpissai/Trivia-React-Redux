export const NEW_QUESTIONS = 'NEW_QUESTIONS';
export const GET_LOGIN = 'GET_LOGIN';
export const INDEX_QUESTION = 'INDEX_QUESTION';
export const QUESTION_SELECTED = 'QUESTION_SELECTED';
export const NEXT_TIMER = 'NEXT_TIMER';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const HITS = 'HITS';
export const RESET_LOGIN = 'RESET_LOGIN';
export const RESET_INDEX = 'RESET_INDEX';

export const newQuestions = (payload) => ({
  type: NEW_QUESTIONS,
  payload,
});

export const resetLogin = () => ({
  type: RESET_LOGIN,
});

export const resetIndex = () => ({
  type: RESET_INDEX,
});

export const getLogin = (login) => ({
  type: GET_LOGIN,
  payload: login,
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

export const hits = () => ({
  type: HITS,
});
