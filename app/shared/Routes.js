import React from 'react';
import { Switch, Route } from 'react-router';

import App from 'components/App';
import NotFound from 'components/NotFound';


const Routes = () => (
  <Switch>
    <Route exact path='/' component={App} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
