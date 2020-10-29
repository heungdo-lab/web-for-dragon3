import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/Home";
import Dragon from "../routes/Dragon";
import Ittally from "../routes/Ittally";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/dragon" component={Dragon} />
    <Route path="/ittally" component={Ittally} />
    <Redirect from="*" to="/" />
  </Switch>
);
