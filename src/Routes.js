import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from './views/notFound/NotFound';
import Home from './views/dashboard/Dashboard';
import Secrets from './views/secrets/Secrets';
import UpdateSecret from './views/secrets/UpdateSecret';
import NewSecret from './views/secrets/NewSecret';

export default () => (
  <Switch>
    <Route exact path="/kubernetes/secrets" component={Secrets} />
    <Route exact path="/kubernetes/secrets/new" component={NewSecret} />
    <Route exact path="/kubernetes/secrets/update" component={UpdateSecret} />

    <Route exact path="/dashboard" component={Home} />
    <Redirect from="/" to="/dashboard" exact />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
