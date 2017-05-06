import {
	CREATE_POST,
	CREATE_POST_ERROR,
	FETCH_POST,
	FETCH_POST_ERROR,
	REMOVE_POST,
	IS_FETCHING,
	POST_TAKED
} from '../../constants/action-types';
import omitDeep from 'omit-deep-lodash';
import _ from 'lodash';

const INITIAL_STATE = {
	isFetching: false,
	data: {},
	dataTaked: {
		isTaked: false
	}
};

export const postItem = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case IS_FETCHING:
			return {
				...state,
				isFetching: true
			};
		case FETCH_POST:
			return {
				...state,
				isFetching: false,
				data: action.payload
			};
		case CREATE_POST:
			return _.assign({}, state, { data: { ...state.data,
				[action.payload.postId]: {
					...action.payload
					}
				} 
			});
		case REMOVE_POST: 
			return omitDeep(state, `${action.key}`);
		case POST_TAKED:
			return _.assign({}, state, { 
				dataTaked: {
					isTaked: true,
					...action 
				} 
			});
		case FETCH_POST_ERROR:
		case CREATE_POST_ERROR:
			return action.message;
		default:
			return state;
	}
};
