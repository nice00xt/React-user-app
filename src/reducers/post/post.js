import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST
} from '../../constants/action-types';
import _ from 'lodash';

export const postItem = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POST:
			return action.payload;
		case CREATE_POST:
			console.log({...state, ...action }, 'ACTION')
			return {...state, ...action.payload };
		case REMOVE_POST:
			return _.omit(state, action.payload);
	
		case FETCH_POST_ERROR:
		case CREATE_POST_ERROR:
			return action.message;
		default:
			return state;
	}
};
