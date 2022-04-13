import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RoutesInfo, { IRoutes } from "./routes";

const Routes: React.FC = () => {
  const renderComponent = (route: IRoutes) => {
    if (route.isAuthenticated) {
      return null;
    }

    return (
      <Route
        path={route.path}
        component={route.component}
        exact={true}
        key={route.name}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>{RoutesInfo.map(renderComponent)}</Switch>
    </BrowserRouter>
  );
};

export default Routes;
