import { combineReducers } from 'redux';
import {
  GAME_STARTED,
  GAME_ENDED,
  NEXT_QUESTION,
  GAME_RESTART,
} from './actions';
import { POINTS_ARRAY } from './constants';

function calculatePoints(round) {
  return POINTS_ARRAY[round];
}

export function questions(state = [], action) {
  switch (action.type) {
    case GAME_STARTED:
      return action.questions;
    case GAME_RESTART:
      return [];
    default:
      return state;
  }
}

export function round(state = 0, action) {
  switch (action.type) {
    case GAME_STARTED:
      return state + 1;
    case NEXT_QUESTION:
      return state + 1;
    case GAME_RESTART:
      return 0;
    default:
      return state;
  }
}

export function ended(state = false, action) {
  switch (action.type) {
    case GAME_ENDED:
      return true;
    case GAME_RESTART:
      return false;
    default:
      return state;
  }
}

export function points(state = 0, action) {
  switch (action.type) {
    case NEXT_QUESTION:
      return state + calculatePoints(action.round);
    case GAME_ENDED:
      return state;
    case GAME_RESTART:
      return 0;
    default:
      return state;
  }
}

export function record(state = 0, action) {
  switch (action.type) {
    case GAME_ENDED:
      return state < action.points ? action.points : state;
    default:
      return state;
  }
}

export default combineReducers({ questions, round, ended, points, record });
