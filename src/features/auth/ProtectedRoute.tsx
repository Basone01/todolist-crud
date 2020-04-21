import React from "react";
import { useAuthContext } from "./authContext";
import { Redirect, RouteComponentProps } from "react-router-dom";

export default function ProtectedRoute(Component: React.ComponentType<any>) {
  return function ProtectedRoute(props: RouteComponentProps) {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: props.location,
            },
          }}
        />
      );
    }

    return <Component {...props} />;
  };
}
