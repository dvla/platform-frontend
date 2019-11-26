import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./components/NotFound"
import Home from "./components/Home"


export default ({ childProps }) =>
  <Switch>
    <Route path="/" component={Home} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;