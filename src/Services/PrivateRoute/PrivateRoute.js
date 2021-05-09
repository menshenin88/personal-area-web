import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return sessionStorage.getItem("user") ? (
          <Component {...props} {...rest}/>
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default PrivateRoute;
