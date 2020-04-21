import React from "react";
import LoginPage from "features/auth/LoginPage";
import { useAuthContext } from "features/auth/authContext";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "features/auth/ProtectedRoute";
import TodoListPage from "features/todo/TodoListPage";

function App() {
  const { isLoadingFirstAuth } = useAuthContext();
  if (isLoadingFirstAuth) return <div>LOADING</div>;
  return (
    <Switch>
      <Route path="/todos" component={ProtectedRoute(TodoListPage)} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
