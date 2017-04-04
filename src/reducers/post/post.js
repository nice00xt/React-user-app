import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST
} from '../../constants/action-types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_POST:
			return action.payload;
		case CREATE_POST:
			return {...state, ...action.payload };
		case REMOVE_POST:
			return _.omit(state, action.payload);
	
		case FETCH_POST_ERROR:
		case CREATE_POST_ERROR:
			return action.message;
		default:
			return state;
	}
}