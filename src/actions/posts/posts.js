import { firedux } from '../../store/firedux';

import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST
} from '../../constants/action-types';

export function fetchPost () {
	return dispatch => {
		firedux.watch('/posts')
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

export function createPost (user, last, date) {
  return (dispatch) => {
    firedux.push('/posts', {
			name: user,
			last: last,
			date: date
		})
		.then(() => {
			dispatch({
				type: CREATE_POST
			});
		})
		.catch((error) => {
			dispatch({
				type: CREATE_POST_ERROR,
				message: error.message
			});
		});
	};
} 

export function removePost (key) {
	return dispatch => {
		firedux.remove(`posts/${key}`)
		.then(() => {
			dispatch({
				type: REMOVE_POST
			});
		});
	};
} 
