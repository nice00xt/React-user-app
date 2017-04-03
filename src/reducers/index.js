import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import userReducers from './users/users';
import loginReducer from './login/login';

const rootReducer = combineReducers({
	users: userReducers,
  login: loginReducer,
  routing: routerReducer
});

export default rootReducer;