import { firedux } from '../../store/firedux';

import {
	CREATE_USER,
	SHOW_USERS,
	REMOVE_USER,
	CREATE_USER_ERROR,
	SHOW_USERS_ERROR
} from '../../constants/action-types';

export function showUsers () {
	return dispatch => {
		firedux.watch('/users')
		.then(({snapshot}) => {
			dispatch({
				type: SHOW_USERS,
				payload: snapshot.val()
			});
		})
		.catch((error) => {
			dispatch({
				type: SHOW_USERS_ERROR,
				message: error.message
			});
		});
	};
}

export function createUser (user, last, date) {
  return (dispatch) => {
    firedux.push('/users', {
			name: user,
			last: last,
			date: date
		})
		.then(() => {
			dispatch({
				type: CREATE_USER
			});
		})
		.catch((error) => {
			dispatch({
				type: CREATE_USER_ERROR,
				message: error.message
			});
		});
	};
} 

export function removeUser (key) {
	return dispatch => {
		firedux.remove(`users/${key}`)
		.then(() => {
			dispatch({
				type: REMOVE_USER
			});
		});
	};
} 
