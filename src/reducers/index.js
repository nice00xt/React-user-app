import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import * as postReducers from './post/post';
import authReducers from './auth/auth';
import usersReducers from './users/users';

const rootReducer = combineReducers({
	posts: postReducers.postItem,
  auth: authReducers,
  users: usersReducers,
  routing: routerReducer
});

export default rootReducer;