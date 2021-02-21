import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser && currentUser !== null) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
