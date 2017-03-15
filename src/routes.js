import { App } from './components/App';
import { Home } from './containers/Home/Home';
import { NotFoundPage } from './containers/NotFoundPage/NotFoundPage';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);