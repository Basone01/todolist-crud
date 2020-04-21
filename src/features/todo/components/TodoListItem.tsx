import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";

export default function TodoListItem({
  todo,
  onRemove,
}: {
  todo: ToDoListFeature.ITodo;
  onRemove?: (_id: string) => void;
}) {
  const { title, description, _id } = todo;

  const handleRemove = useCallback(() => {
    if (onRemove) {
      onRemove(_id);
    }
  }, [_id, onRemove]);

  return (
    <div data-testid="todo-list-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <button data-testid="delete-todo-btn" onClick={handleRemove}>
        x
      </button>
    </div>
  );
}
