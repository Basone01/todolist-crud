import React from "react";
import { useTodoContext } from "../todoContext";
import TodoList from "../components/TodoList";

export default function TodoListContainer() {
  const { todos } = useTodoContext();
  return <TodoList todos={todos} />;
}
