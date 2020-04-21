import React from "react";
import { TodoProvider } from "./todoContext";
import TodoListContainer from "./containers/TodoListContainer";

export default function TodoListPage() {
  return (
    <TodoProvider>
      <TodoListContainer />
    </TodoProvider>
  );
}
