import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGN_OUT_SUCCESS
} from '../../constants/action-types';

const INITIAL_STATE = {
  isUserSignedIn: false,
  isSignOutInProgress: false,
  isInProgress: false,
  hasError: false,
  errorMessage: '',
  uid: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isUserSignedIn: true,
        isInProgress: false,
        uid: action.uid
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