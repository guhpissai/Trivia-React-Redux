import { GET_LOGIN, PLAYER_SCORE, HITS } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN:
    return ({
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    });
  case PLAYER_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  case HITS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};
