import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Rocket from "./view/rocket/Rocket";
import RocketList from "./view/rocketList/RocketList";

const routes = [
  {
    path: "/",
    component: <RocketList />,
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
