import {
  FETCH_USERS
} from '../../constants/action-types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
}