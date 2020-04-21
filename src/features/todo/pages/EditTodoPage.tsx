import React, { useCallback, useState, useEffect } from "react";
import EditTodoFormContainer from "../containers/EditTodoFormContainer";
import { useTodoContext } from "../todoContext";
import { ToDoListFeature } from "../types";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useServiceContext } from "ServiceContext";

export default function EditTodoPage() {
  const history = useHistory();
  const match = useRouteMatch<{ _id: string }>("/todos/:_id");

  const { todoService } = useServiceContext();
  const { updateTodo } = useTodoContext();

  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState<ToDoListFeature.ITodo>();
  const _id = match?.params?._id!;

  const handleCreateTodo = useCallback(
    async (todo: ToDoListFeature.ITodoForm) => {
      try {
        await updateTodo(_id, todo);
        history.push("/todos");
      } catch (error) {
        alert("Something went wrong while updating todo");
      }
    },
    [_id, history, updateTodo]
  );

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const todo = await todoService.getById(_id);
        setTodo(todo);
      } catch (error) {
        alert("Something went wrong while getting todo");
      } finally {
        setLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = useCallback(() => {
    history.push("/todos");
  }, [history]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!todo) {
    return <div>Not found</div>;
  }

  return (
    <>
      <h3>EDIT TASK</h3>
      <EditTodoFormContainer
        initialValues={{ title: todo.title, description: todo.description }}
        onSubmit={handleCreateTodo}
        onCancel={handleCancel}
      />
    </>
  );
}
