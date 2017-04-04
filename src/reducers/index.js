import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import postReducers from './post/post';
import loginReducers from './login/login';
import usersReducers from './users/users';

const rootReducer = combineReducers({
	posts: postReducers,
  login: loginReducers,
  users: usersReducers,
  routing: routerReducer
});

export default rootReducer;