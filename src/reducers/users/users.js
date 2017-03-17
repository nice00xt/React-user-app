import { SHOW_USERS } from '../../constants/action-types';

export default function(state = {}, action) {
	switch (action.type) {
		case SHOW_USERS:
			return action.payload;
	}
	
	return state;
}