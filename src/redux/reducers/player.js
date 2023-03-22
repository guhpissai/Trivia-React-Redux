import { GET_LOGIN, SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

export const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LOGIN: {
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  }

  case SCORE: {
    return {
      ...state,
      score: action.payload.score,
    };
  }

  default:
    return state;
  }
};
