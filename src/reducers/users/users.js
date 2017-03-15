// import { SHOW_USERS } from '.../constants/action-types';

const initialState = {
	list: []
};

export function showUsers (state = initialState, action) {
	switch (action.type) {
		case 'SHOW_USERS':
			return Object.assign( {}, state, { list: action.payload } );
		default:
			return state;
	}
}