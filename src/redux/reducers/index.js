import { combineReducers } from 'redux';
import { login } from './login';
import { game } from './game';

export const rootReducer = combineReducers({
  login,
  game,
});
