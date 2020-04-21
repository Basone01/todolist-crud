import React, { useCallback } from "react";
import { useTodoContext } from "../todoContext";
import TodoList from "../components/TodoList";

export default function TodoListContainer() {
  const { todos, deleteTodo } = useTodoContext();

  const handleDeleteTodo = useCallback(
    (_id: string) => {
      const todo = todos.find((todo) => todo._id === _id);

      const confirmed = window.confirm(`Delete ${todo?.title}?`);
      if (!confirmed) return;

      deleteTodo(_id);
    },
    [deleteTodo, todos]
  );

  return <TodoList todos={todos} onRemove={handleDeleteTodo} />;
}
