import { NEW_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

export const game = (state = INITIAL_STATE, _action) => {
  switch (_action.type) {
  case NEW_QUESTIONS:
    return ({
      ...state,
      questions: _action.payload,
    });
  default:
    return state;
  }
};
