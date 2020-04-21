import React, { useCallback } from "react";
import AddTodoFormContainer from "../containers/AddTodoFormContainer";
import { useTodoContext } from "../todoContext";
import { ToDoListFeature } from "../types";
import { useHistory } from "react-router-dom";

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
        history.push("/todos");
      } catch (error) {
        alert("Something went wrong while adding todo");
      }
    },
    [createTodo, history]
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
    </>
  );
}
