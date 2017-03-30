import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/App';
import Home from './containers/home/home';
import { loginPage } from './containers/login-page/login-page';
import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="login" component={loginPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);