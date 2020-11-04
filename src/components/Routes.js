import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../routes/Home";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/product"
      component={() => {
        window.location.href = "https://www.instagram.com/p/CG6dyXEDQ_G/";
        return null;
      }}
    />
    <Redirect from="*" to="/" />
  </Switch>
);
