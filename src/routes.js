import { App } from './components/App';
import { Home } from './containers/home/home';
import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';
import { UserList } from './containers/user-list/user-list';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="user-list" component={UserList}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);