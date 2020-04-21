import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTodoContext } from "../todoContext";
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const { fetchAllTodos, todos, deleteTodo } = useTodoContext();

  const handleDeleteTodo = useCallback(
    async (_id: string) => {
      const todo = todos.find((todo) => todo._id === _id);

      const confirmed = window.confirm(`Delete ${todo?.title}?`);
      if (!confirmed) return;
      try {
        await deleteTodo(_id);
      } catch (error) {
        alert("Something went wrong while deleting todo");
      }
    },
    [deleteTodo, todos]
  );

  useEffect(() => {
    (async function () {
      try {
        await fetchAllTodos();
      } catch (error) {
        alert("Something went wrong while deleting todo");
      }
    })();
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
