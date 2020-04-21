import React, { useCallback } from "react";
import { ToDoListFeature } from "../types";
import { Link } from "react-router-dom";

export default function AddTodoForm({
  values = {},
  onSubmit,
  onChange,
  onCancel,
}: {
  values: Partial<ToDoListFeature.ITodoForm>;
  onSubmit?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCancel?: () => void;
}) {
  const { title = "", description = "" } = values;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    [onSubmit]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
