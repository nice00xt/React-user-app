import { SHOW_USERS } from '../../constants/action-types';
import objectAssign from 'object-assign';

const initialState = {
	list: []
};

export function showUsers (state = initialState, action) {
	switch (action.type) {
		case SHOW_USERS:
			return objectAssign( {}, state, { list: action.payload } );
		default:
			return state;
	}
}