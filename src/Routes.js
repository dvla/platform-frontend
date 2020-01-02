import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from './views/notFound/NotFound';
import Home from './views/dashboard/Dashboard';
import Secrets from './views/secrets/Secrets';

export default () => (
  <Switch>
    <Route path="/kubernetes/secrets" component={Secrets} />
    <Route path="/dashboard" component={Home} />
    <Redirect from="/" to="/dashboard" exact />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
