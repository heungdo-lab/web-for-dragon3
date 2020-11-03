import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../App";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipes" component={Recipes} />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  </BrowserRouter>
);

export default Router;
