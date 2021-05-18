import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Rocket from "./components/Rocket";
import RocketLunch from "./view/RocketLunch";

const routes = [
  {
    path: "/",
    component: <RocketLunch />,
    exact: true,
  },
  {
    path: "/lunch/:id",
    component: <Rocket />,
    exact: true,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path} key={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
