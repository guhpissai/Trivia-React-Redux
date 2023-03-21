import { NEW_QUESTIONS,
  ISDISABLED_BUTTON,
  INDEX_QUESTION,
  QUESTION_SELECTED } from '../actions';

const INITIAL_STATE = {
  questions: [],
  isDisabled: false,
  indexQuestions: 0,
  questionSelected: false,
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

  case INDEX_QUESTION:
    return ({
      ...state,
      indexQuestions: action.payload,
    });

  case QUESTION_SELECTED:
    return {
      ...state,
      questionSelected: !state.questionSelected,
    };

  default:
    return state;
  }
};
