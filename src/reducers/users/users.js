import {
	CREATE_USER,
	REMOVE_USER,
	SHOW_USERS,
	CREATE_USER_ERROR,
	SHOW_USERS_ERROR
} from '../../constants/action-types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SHOW_USERS:
			return action.payload;
		case CREATE_USER:
			return {...state, ...action.payload };
		case REMOVE_USER:
			return _.omit(state, action.payload);
	
		case SHOW_USERS_ERROR:
		case CREATE_USER_ERROR:
			return action.message;
		default:
			return state;
	}
}