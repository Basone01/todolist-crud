import React, { useCallback } from "react";
import TodoFormContainer from "../containers/TodoFormContainer";
import { useTodoContext } from "../todoContext";
import { ToDoListFeature } from "../types";
import { Link } from "react-router-dom";

export default function AddTodoPage() {
  const { createTodo } = useTodoContext();

  const handleCreateTodo = useCallback(
    async (
      todo: ToDoListFeature.ITodoForm,
      formActions: { resetForm: () => void }
    ) => {
      try {
        await createTodo(todo);
        formActions.resetForm();
      } catch (error) {
        alert(error.message);
      }
    },
    [createTodo]
  );

  return (
    <>
      <TodoFormContainer onSubmit={handleCreateTodo} />
      <div>
        <Link to="/todos">View</Link>
      </div>
    </>
  );
}
