import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/App';
import Home from './containers/home/home';
import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);