import { firedux } from '../../store/firedux';

import {
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
	SIGN_OUT_SUCCESS
} from '../../constants/action-types';

export function signInWithGoogle() {
  return authenticate(new firedux.auth.GoogleAuthProvider());
}

export function signOut() {
  return dispatch => {
    firedux.auth().signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

function authenticate(provider) {
  return dispatch => {
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

export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
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
    type: SIGN_IN_SUCCESS,
    payload: uid
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}
