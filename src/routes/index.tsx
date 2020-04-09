import * as React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";
import Login from "../pages/Login";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact isPrivate component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};
export default Routes;
