import React, { useCallback } from "react";
import AddTodoFormContainer from "../containers/AddTodoFormContainer";
import { useTodoContext } from "../todoContext";
import { ToDoListFeature } from "../types";
import { Link, useHistory } from "react-router-dom";

export default function AddTodoPage() {
  const history = useHistory();
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
        alert("Something went wrong while adding todo");
      }
    },
    [createTodo]
  );

  const handleCancel = useCallback(() => {
    history.push("/todos");
  }, [history]);

  return (
    <>
      <h3>NEW TASK</h3>
      <AddTodoFormContainer
        onSubmit={handleCreateTodo}
        onCancel={handleCancel}
      />
      <div>
        <Link to="/todos">View</Link>
      </div>
    </>
  );
}
