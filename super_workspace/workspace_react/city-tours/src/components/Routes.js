import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Routes/Main";
import TodoSecretaryPolicy from "../Routes/TodoSecretaryPolicy";
import NotFound from "../Routes/NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/policy/todosecretary" component={TodoSecretaryPolicy} />
    <Route path="*" component={NotFound} />
  </Switch>
);
