import {
	CREATE_USER,
	REMOVE_USER,
	SHOW_USERS
} from '../../constants/action-types';
import _ from 'lodash';

export default function(state = {}, action) {
	switch (action.type) {
		case SHOW_USERS:
			return action.payload;
		case CREATE_USER:
			return { ...state, ...action.payload };
		case REMOVE_USER:
			return _.omit(state, action.payload);
	}

	return state;
}