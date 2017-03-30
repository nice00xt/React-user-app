import {
	// CREATE_USER,
	// REMOVE_USER,
	SHOW_USERS
} from '../../constants/action-types';

const INITIAL_STATE = {
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SHOW_USERS:
			console.log(state, action, 'state user list');
			return { ...state, ...action.payload };
		default: 
			return state;
	}
}