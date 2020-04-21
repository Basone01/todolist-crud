import React, { useCallback } from "react";
import LoginFormContainer from "features/auth/containers/LoginFormContainer";
import { useAuthContext } from "./authContext";
import {
  useLocation,
  RouteComponentProps,
  useHistory,
  Redirect,
} from "react-router-dom";
import { LoginFeature } from "./types";

export default function LoginPage() {
  const history = useHistory();
  const location = useLocation<{ from?: RouteComponentProps["location"] }>();
  const { handleLogin, isAuth } = useAuthContext();

  const { from: previousRoute } = location.state || { from: undefined };

  const handleSubmitLogin = useCallback(
    async (loginFormValues: LoginFeature.ILoginForm) => {
      try {
        await handleLogin(loginFormValues);
        if (previousRoute) {
          history.replace(previousRoute);
        }
      } catch (error) {
        alert(error.message);
      }
    },
    [handleLogin, history, previousRoute]
  );

  if (isAuth) {
    return <Redirect to="/todos" />;
  }

  return <LoginFormContainer onSubmit={handleSubmitLogin} />;
}
