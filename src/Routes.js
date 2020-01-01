import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './views/NotFound';
import Home from './views/Home';
import Secrets from './views/secrets/Secrets';

export default () => (
  <Switch>
    <Route exact path="/kubernetes/secrets" component={Secrets} />
    <Route exact path="/" component={Home} />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
