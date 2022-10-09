import React from "react";
import { Route, Switch } from 'react-router-dom';
import routes from './appRouter';
import SiteError from "../../layout/admin/error";

const ProtectedRoutes = () => (
  <Switch>
      {routes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
      <Route component={SiteError} />
  </Switch>
);

export default ProtectedRoutes;