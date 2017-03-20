import { 
	SHOW_USERS,
	CREATE_USER
} from '../../constants/action-types';

export default function(state = {}, action) {
	switch (action.type) {
		case SHOW_USERS:
			return action.payload;
		case CREATE_USER:
			return action.payload;
	}
	
	return state;
}