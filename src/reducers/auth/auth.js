import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_SUCCESS,
  USER_LOGGED,
  USER_UNLOGGED
} from '../../constants/action-types';

const INITIAL_STATE = {
  isUserSignedIn: false,
  isSignOutInProgress: false,
  isInProgress: null,
  hasError: false,
  errorMessage: '',
  userIsLogged: null,
  user: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGGED:
      return {
        ...state,
        userIsLogged: true,
        user: {
          ...action.payload,
        }
      };
    case USER_UNLOGGED:
      return {
        ...state,
        userIsLogged: false,
        user: {}
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isUserSignedIn: true,
        isInProgress: false
      };
    case SIGN_IN:
      return {
        ...state,
        isInProgress: true
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        hasError: true,
        error: action.error
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        isUserSignedIn: false,
        isSignOutInProgress: false
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignOutInProgress: true
      };
    default:
      return state;
  }
}