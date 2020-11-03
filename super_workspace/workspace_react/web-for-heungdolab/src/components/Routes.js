import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../routes/Main";
import NotFound from "../routes/NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="*" component={NotFound} />
  </Switch>
);
