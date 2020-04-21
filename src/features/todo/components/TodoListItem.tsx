import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";

export default function TodoListItem({
  todo,
  onRemove,
  onEdit,
}: {
  todo: ToDoListFeature.ITodo;
  onRemove?: (_id: string) => void;
  onEdit?: (_id: string) => void;
}) {
  const { title, description, _id } = todo;

  const handleRemove = useCallback(() => {
    if (onRemove) {
      onRemove(_id);
    }
  }, [_id, onRemove]);

  const handleEdit = useCallback(() => {
    if (onEdit) {
      onEdit(_id);
    }
  }, [_id, onEdit]);

  return (
    <div data-testid="todo-list-item">
      <h4>{title}</h4>
      <p>{description}</p>
      <button data-testid="delete-todo-btn" onClick={handleRemove}>
        x
      </button>
      <button data-testid="edit-todo-btn" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
}
