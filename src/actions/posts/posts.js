import { firedux } from '../../store/firedux';

import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST
} from '../../constants/action-types';

export function fetchPost () {
	return (dispatch) => {
		firedux.watch(`/posts`)
		.then(({snapshot}) => {
			dispatch({
				type: FETCH_POST,
				payload: snapshot.val()
			});
		})
		.catch((error) => {
			dispatch({
				type: FETCH_POST_ERROR,
				message: error.message
			});
		});
	};
}

export const postInProgress = (uid, displayName, photoURL, user, last, date) => {
  return {
    type: CREATE_POST,
    payload: {
      [uid]: {
        id: {
          uid,
          displayName,
          photoURL,
          user,
          last,
          date
        }
      }
    }
  };
};


export function createPost (uid, displayName, photoURL, user, last, date) {
  return (dispatch) => {
    dispatch( postInProgress(uid, displayName, photoURL, user, last, date));
    firedux.push(`/posts/${uid}`, {
      uid,
      displayName,
      photoURL,
			user,
			last,
			date
		})
		.catch((error) => {
			dispatch({
				type: CREATE_POST_ERROR,
				message: error.message
			});
		});
	};
} 

export function removePost (key, uid) {
	return (dispatch) => {
		firedux.remove(`/posts/${uid}/${key}`)
		.then(() => {
			dispatch({
				type: REMOVE_POST
			});
		});
	};
} 
