import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TodoListContainer from "../containers/TodoListContainer";
import { useTodoContext } from "../todoContext";

export default function TodoListPage() {
  const { fetchAllTodos } = useTodoContext();
  useEffect(() => {
    fetchAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TodoListContainer />
      <div>
        <Link to="/todos/add">Create</Link>
      </div>
    </>
  );
}
