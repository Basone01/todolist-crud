import React from "react";
import { useTodoContext } from "../todoContext";
import TodoList from "../components/TodoList";

export default function TodoListContainer() {
  const { todos, deleteTodo } = useTodoContext();

  return <TodoList todos={todos} onRemove={deleteTodo} />;
}
