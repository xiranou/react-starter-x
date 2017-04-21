import React from 'react';
import * as Route from 'react-router-dom';

import App from 'components/App';
import NotFound from 'components/NotFound';

const Routes = (props) => {
  return (
    <div>
      <Route path='/' component={App} />
      <Route component={NotFound} />
    </div>
  );
}

export default Routes;
