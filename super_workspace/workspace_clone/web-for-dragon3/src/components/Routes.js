import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/Home";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);
