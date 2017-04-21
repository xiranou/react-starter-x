import React from 'react';
import * as Route from 'react-router-dom';

import App from 'components/App';
import NotFound from 'components/NotFound';


const Routes = () => (
  <div>
    <Route path='/' exact={true} component={App} />
    <Route component={NotFound} />
  </div>
);

export default Routes;
