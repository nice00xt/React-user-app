import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { showUsers } from './users/users';

 const rootReducer = combineReducers({
  routing: routerReducer,
  user: showUsers
});

 export default rootReducer;