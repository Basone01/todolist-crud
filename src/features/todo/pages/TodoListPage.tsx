import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../todoContext";
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const { fetchAllTodos, todos, deleteTodo } = useTodoContext();

  const handleDeleteTodo = useCallback(
    (_id: string) => {
      const todo = todos.find((todo) => todo._id === _id);

      const confirmed = window.confirm(`Delete ${todo?.title}?`);
      if (!confirmed) return;

      deleteTodo(_id);
    },
    [deleteTodo, todos]
  );
  useEffect(() => {
    fetchAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TodoList todos={todos} onRemove={handleDeleteTodo} />;
      <div>
        <Link to="/todos/add">Create</Link>
      </div>
    </>
  );
}
