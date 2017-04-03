import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR
} from '../../constants/action-types';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      console.log(action, 'LOGIN REDUCER');
      return action.payload;
    case SIGN_IN_ERROR:
      return action.payload;
    default:
      return state;
  }
}