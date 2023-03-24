import { NEW_QUESTIONS,
  INDEX_QUESTION,
  QUESTION_SELECTED,
  NEXT_TIMER,
  RESET_INDEX } from '../actions';

const INITIAL_STATE = {
  questions: [],
  indexQuestions: 0,
  questionSelected: false,
  nextBoolean: false,
};

export const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NEW_QUESTIONS:
    return ({
      ...state,
      questions: action.payload,
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

  case NEXT_TIMER:
    return {
      ...state,
      nextBoolean: !state.nextBoolean,
    };

  case RESET_INDEX:
    return {
      ...INITIAL_STATE,
    };
  default:
    return state;
  }
};
