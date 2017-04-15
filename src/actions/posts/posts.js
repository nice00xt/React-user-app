import { firedux } from '../../store/firedux';

import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST,
	IS_FETCHING,
	POST_TAKED
} from '../../constants/action-types';

function isFetching () {
	return {
		type: IS_FETCHING
	};
}

export function fetchPost () {
	return (dispatch) => {
		dispatch( isFetching());

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

export const postList = (payload) => {
  return {
    type: CREATE_POST,
    payload
  };
};

export function createPost (uid, displayName, photoURL, status, type, date) {
  return (dispatch) => {
    firedux.push(`/posts/${uid}`, {
      uid,
      displayName,
      photoURL,
			status,
			type,
			date
		})
		.then((snapshot) => {
			const postId = snapshot;
			dispatch( postList({uid, displayName, photoURL, status, type, date, postId}));
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
				type: REMOVE_POST,
				key,
				uid
			});
		});
	};
}

export function takePost (uid, postId, userTakedId, displayName, photoURL) {
	return (dispatch) => {
		firedux.set(`posts/${uid}/${postId}/taken`, {
			userTakedId,
			displayName,
			photoURL
		})
		.then(() => {
			dispatch({
				type: POST_TAKED,
				userTakedId,
				displayName,
				photoURL
			});
		});
	};
}



