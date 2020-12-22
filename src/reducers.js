import { combineReducers } from 'redux';
import { QUESTIONS_LOADED } from './actions';

export function questions(state = [], action) {
  switch (action.type) {
    case QUESTIONS_LOADED:
      return action.questions;
    default:
      return state;
  }
}

export default combineReducers({ questions });
