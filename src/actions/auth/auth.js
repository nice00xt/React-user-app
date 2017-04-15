import { firedux } from '../../store/firedux';
import {
  SIGN_IN,
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
  SIGN_OUT,
	SIGN_OUT_SUCCESS,
  USER_LOGGED,
  USER_UNLOGGED,
} from '../../constants/action-types';

export function userSessionState() {
  return dispatch => {
    firedux.auth().onAuthStateChanged((user) => {
       if (user) {
          const { uid, email, photoURL, displayName } = user;
          dispatch({
            type: USER_LOGGED,
            payload: {
              uid,
              email,
              photoURL,
              displayName
            }
          });
       } else {
          dispatch({ type: USER_UNLOGGED });      
       }
    });
  };
}

export function signInWithGoogle() {
  return authenticate(new firedux.auth.GoogleAuthProvider());
}

export function signOut() {
  return dispatch => {
    dispatch(signOutInProgress());
    
    firedux.auth().signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

function signOutInProgress() {
  return { type: SIGN_OUT };
}

function signOutSuccess() {
  return { type: SIGN_OUT_SUCCESS };
}

function authenticate(provider) {
  return dispatch => {
    dispatch(signInInProgress());

    firedux.auth()
    .signInWithPopup(provider)

    .then(result => 
      dispatch(signInSuccess(result))
    )
    .catch(error => dispatch(
      signInError(error))
    );
  };
}

function signInInProgress() {
  return { type: SIGN_IN };
}

export function signInSuccess(result) {
	const { 
		user: { 
			uid, 
			displayName, 
			photoURL, 
			email 
		} 
	} = result;

	firedux.set(`users/${ uid }`, {
		displayName,
    email,
    photoURL,
    uid
	});
  return {
    type: SIGN_IN_SUCCESS
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    error
  };
}
