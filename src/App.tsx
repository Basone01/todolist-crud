import React from "react";
import LoginPage from "features/auth/pages/LoginPage";
import { useAuthContext } from "features/auth/authContext";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "features/auth/ProtectedRoute";
import TodoListPage from "features/todo/pages/TodoListPage";
import AddTodoPage from "features/todo/pages/AddTodoPage";
import EditTodoPage from "features/todo/pages/EditTodoPage";

function App() {
  const { isLoadingFirstAuth } = useAuthContext();
  if (isLoadingFirstAuth) return <div>LOADING</div>;
  return (
    <Switch>
      <Route path="/todos" exact component={ProtectedRoute(TodoListPage)} />
      <Route path="/todos/add" exact component={ProtectedRoute(AddTodoPage)} />
      <Route
        path="/todos/:_id"
        exact
        component={ProtectedRoute(EditTodoPage)}
      />
      <Route path="/login" component={LoginPage} />
    </Switch>
  );
}

export default App;
