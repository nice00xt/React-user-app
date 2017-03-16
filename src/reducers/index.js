import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { showUsers } from './users/users';

const rootReducer = combineReducers({
	user: showUsers, 
  routing: routerReducer
});

export default rootReducer;