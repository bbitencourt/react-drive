import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Login";
import Home from "../pages/Home";

export default function Routes() {
  const { logado } = useSelector(state => state.auth);

  return (
    <HashRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            if (logado) {
              return <Redirect to={{ pathname: "/home" }} />;
            }
            return <Redirect to={{ pathname: "/login" }} />;
          }}
        />
        <Route
          path="/login"
          exact
          render={() => logado && <Redirect to={{ pathname: "/home" }} />}
          component={!logado && Login}
        />
        <PrivateRoute authed={logado} path="/home" exact component={Home} />
      </Switch>
    </HashRouter>
  );
}

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
