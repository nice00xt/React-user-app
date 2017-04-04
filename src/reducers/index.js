import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import postReducers from './post/post';
import loginReducer from './login/login';

const rootReducer = combineReducers({
	posts: postReducers,
  login: loginReducer,
  routing: routerReducer
});

export default rootReducer;