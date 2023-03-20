import { NEW_QUESTIONS, ISDISABLED_BUTTON } from '../actions';

const INITIAL_STATE = {
  questions: [],
  isDisabled: false,
};

export const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_QUESTIONS:
    return ({
      ...state,
      questions: action.payload,
    });

  case ISDISABLED_BUTTON:
    return ({
      ...state,
      isDisabled: action.payload,
    });
  default:
    return state;
  }
};
