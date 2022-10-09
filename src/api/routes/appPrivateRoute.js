import React, { useEffect, useState  } from "react";
import {
  Route,
  Redirect
} from 'react-router-dom';

function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        () => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: '/cms/login',
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoute;