import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from './views/notFound/NotFound';
import Home from './views/dashboard/Dashboard';
import Secrets from './views/secrets/Secrets';
import UpdateSecret from './views/secrets/UpdateSecret';
import NewSecret from './views/secrets/NewSecret';

export default props => {
  return (
    <Switch>
      <Route
        exact
        path="/kubernetes/secrets"
        render={() => <Secrets group={props.group} />}
      />
      <Route exact path="/kubernetes/secrets/new" component={NewSecret} />
      <Route
        exact
        path="/kubernetes/secrets/update/:name"
        component={UpdateSecret}
      />

      <Route exact path="/dashboard" component={Home} />
      <Redirect from="/" to="/dashboard" exact />

      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
};
