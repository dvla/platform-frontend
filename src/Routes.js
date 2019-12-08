import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './containers/NotFound';
import Home from './containers/Home';
import Secrets from './containers/Secrets';

export default () => (
  <Switch>
    <Route exact path="/kubernetes/secrets" component={Secrets} />
    <Route exact path="/" component={Home} />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
